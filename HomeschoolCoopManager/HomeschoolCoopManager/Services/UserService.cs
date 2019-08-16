using HomeschoolCoopManager.Data;
using HomeschoolCoopManager.Exceptions;
using HomeschoolCoopManager.Interfaces.Services;
using HomeschoolCoopManager.Models;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace HomeschoolCoopManager.Services
{
    public class UserService : IUserService
    {
        private readonly AppDataContext _context;
        private readonly ISecurityService _securityService;

        public UserService(AppDataContext context, ISecurityService securityService)
        {
            _context = context;
            _securityService = securityService;
        }

        public async Task<User> Authenticate(string email, string password)
        {
            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
                return null;

            var user = await _context.Users.ToAsyncEnumerable().SingleOrDefault(x => x.Email == email);

            if (user == null)
                return null;

            if (!_securityService.VerifyPasswordHash(password, user.PasswordHash))
                return null;

            return user;
        }

        public async Task<User> Create(User user, string password)
        {

            if (string.IsNullOrWhiteSpace(password))
                throw new AppException("Password is required");

            if (await _context.Users.ToAsyncEnumerable().Any(x => x.Email == user.Email))
                throw new AppException($"Email \"{user.Email}\" has already been registered");

            user.PasswordHash = _securityService.HashPassword(password);

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }

        public async Task<User> GetById(Guid id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task Delete(Guid id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user != null)
            {
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
            }
        }

        public async Task Update(User userParam, string password = null)
        {
            var user = await _context.Users.FindAsync(userParam.Id);

            if (user == null)
                throw new AppException("User not found");

            if (userParam.Email != user.Email)
            {
                // username has changed so check if the new username is already taken
                if (await _context.Users.ToAsyncEnumerable().Any(x => x.Email == userParam.Email))
                    throw new AppException($"Email \"{userParam.Email}\" is already in use");
            }

            // update password if it was entered
            if (!string.IsNullOrWhiteSpace(password))
            {
                user.PasswordHash = _securityService.HashPassword(password);
            }

            _context.Users.Update(user);
            await _context.SaveChangesAsync();
        }
    }
}
