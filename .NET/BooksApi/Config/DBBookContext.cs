using BooksApi.Models;
using Microsoft.EntityFrameworkCore;

namespace BooksApi.Config
{
    public class DBBookContext : DbContext
    {
        public DBBookContext(DbContextOptions<DBBookContext> options):base(options) 
        {
            
        }

        public DbSet<Book> books { get; set; }
    }
}
