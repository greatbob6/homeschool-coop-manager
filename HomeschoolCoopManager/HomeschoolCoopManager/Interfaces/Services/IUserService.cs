using HomeschoolCoopManager.Models;
using System;
using System.Threading.Tasks;

namespace HomeschoolCoopManager.Interfaces.Services
{
    public interface IUserService
    {
        Task<User> Authenticate(string email, string password);
        Task<User> GetById(Guid id);
        Task<User> Create(User user, string password);
        Task Update(User user, string password = null);
        Task Delete(Guid id);
    }
}
