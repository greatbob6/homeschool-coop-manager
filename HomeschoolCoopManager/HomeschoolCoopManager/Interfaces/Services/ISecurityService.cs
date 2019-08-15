using HomeschoolCoopManager.Models;
using Microsoft.IdentityModel.Tokens;

namespace HomeschoolCoopManager.Interfaces.Services
{
    public interface ISecurityService
    {
        SecurityToken CreateToken(User user);
        string CreateTokenString(User user);
        string HashPassword(string password);
        bool VerifyPasswordHash(string password, string passwordHash);
    }
}
