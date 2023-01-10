using ApiEmpresa.Config;
using ApiEmpresa.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ApiEmpresa.Controllers
{
   
    public class EmpleadosController : Controller
    {

        private readonly DbEmpleadosContext _context;
        public EmpleadosController(DbEmpleadosContext context)
        {
            _context = context;
        }

        [HttpPost("save")]
        public async Task<ActionResult>Post(Empleado empleado)
        {
            _context.Add(empleado); //añadimos el empleado al context
            await _context.SaveChangesAsync(); 

            return Ok();

        }

        [HttpGet("list")]
        public async Task<ActionResult <List<Empleado>>> Get()
        {
            return await _context.empleados.ToListAsync<Empleado>();
        }




    }
}
