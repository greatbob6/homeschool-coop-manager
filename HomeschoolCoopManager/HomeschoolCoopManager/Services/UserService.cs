using HomeschoolCoopManager.Data;
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
                throw new Exception("Password is required");

            if (await _context.Users.ToAsyncEnumerable().Any(x => x.Email == user.Email))
                throw new Exception("Email \"" + user.Email + "\" has already been registered");

            user.PasswordHash = _securityService.HashPassword(password);

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }

        public async Task<User> GetById(Guid id)
        {
            return await _context.Users.FindAsync(id);
        }

        public Task Delete(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task Update(User user, string password = null)
        {
            throw new System.NotImplementedException();
        }
    }
}
