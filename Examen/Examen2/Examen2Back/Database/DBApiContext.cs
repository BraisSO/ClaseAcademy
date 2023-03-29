using Examen2Back.Models;
using Microsoft.EntityFrameworkCore;

namespace backNet.Config
{
    public class DBApiContext : DbContext
    {
        public DBApiContext(DbContextOptions<DBApiContext> options) : base(options)
        {

        }

        public DbSet<Alumno> Alumnos { get; set; }
        public DbSet<Curso> Cursos { get; set; }



    }
}
