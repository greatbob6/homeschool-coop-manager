using HomeschoolCoopManager.Models;
using System.Threading.Tasks;

namespace HomeschoolCoopManager.Interfaces.Services
{
    public interface IUserService
    {
        Task<User> Authenticate(string email, string password);
        Task<User> GetById(int id);
        Task<User> Create(User user, string password);
        Task Update(User user, string password = null);
        Task Delete(int id);
    }
}
