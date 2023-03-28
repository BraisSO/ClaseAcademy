using FavoriteWebs.Models;
using Microsoft.EntityFrameworkCore;

namespace FavoriteWebs.Config
{
    public class AppDBContext : DbContext
    {

        public AppDBContext(DbContextOptions<AppDBContext> options) : base (options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Web> Webs { get; set; }
    }
}
