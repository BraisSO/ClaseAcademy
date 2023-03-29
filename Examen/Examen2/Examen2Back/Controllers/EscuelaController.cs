using backNet.Config;
using Examen2Back.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Examen2Back.Controllers
{
    [Route("/api")]
    public class EscuelaController : Controller
    {

        private readonly DBApiContext _context;

        public EscuelaController(DBApiContext context)
        {
            _context = context;
        }

        [HttpPost ("/save")]
        public async Task<ActionResult> MatricularAlumno([FromBody] Alumno alumno)
        {
            var nuevoAlumno = new Alumno
            {
                Nombre = alumno.Nombre,
                Edad = alumno.Edad,
                Curso = alumno.Curso
            };

            _context.Alumnos.Add(alumno);
            await _context.SaveChangesAsync();

            return Ok();
        }


        [HttpGet("{materia}")]
        public async Task<ActionResult<List<Alumno>>> GetAlumnosPorCurso(string materia)
        {
            var alumnos = await _context.Alumnos.ToListAsync();

            return alumnos;
        }


    }
}
