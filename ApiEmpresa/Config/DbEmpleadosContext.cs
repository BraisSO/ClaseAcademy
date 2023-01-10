using ApiEmpresa.Models;
using Microsoft.EntityFrameworkCore;

namespace ApiEmpresa.Config
{
    public class DbEmpleadosContext: DbContext
    {
        public DbEmpleadosContext(DbContextOptions<DbEmpleadosContext> options):base(options) {
        }
        public DbSet<Empleado> empleados { get;  set; }
    }
}
