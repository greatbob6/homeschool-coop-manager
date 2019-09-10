using HomeschoolCoopManager.Interfaces.Services;
using HomeschoolCoopManager.Models;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace HomeschoolCoopManager.Services
{
    public class SecurityService : ISecurityService
    {
        private readonly int _workFactor = 13;
        private readonly AppSettings _appSettings;

        public SecurityService(IOptions<AppSettings> appSettings)
        {
            _appSettings = appSettings.Value;
        }

        private SecurityToken CreateTokenInternal(User user, JwtSecurityTokenHandler tokenHandler)
        {
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            return tokenHandler.CreateToken(tokenDescriptor);
        }

        public SecurityToken CreateToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            return CreateTokenInternal(user, tokenHandler);
        }

        public string CreateTokenString(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            var token = CreateTokenInternal(user, tokenHandler);

            return tokenHandler.WriteToken(token);
        }

        public string HashPassword(string password) => BCrypt.Net.BCrypt.HashPassword(password, workFactor: _workFactor);
        public bool VerifyPasswordHash(string password, string passwordHash) => BCrypt.Net.BCrypt.Verify(password, passwordHash);
    }
}
