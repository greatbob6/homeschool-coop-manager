using HomeschoolCoopManager.Models.Dtos;
using System;

namespace HomeschoolCoopManager.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }

        public UserDto ToDto()
        {
            return new UserDto { Id = Id, Email = Email };
        }

        public static User FromDto(UserDto udto)
        {
            return new User { Id = udto.Id, Email = udto.Email };
        }
    }
}
