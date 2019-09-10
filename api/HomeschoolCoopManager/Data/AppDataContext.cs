using HomeschoolCoopManager.Models;
using Microsoft.EntityFrameworkCore;

namespace HomeschoolCoopManager.Data
{
    public class AppDataContext : DbContext
    {
        public AppDataContext(DbContextOptions<AppDataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}
