using DemoApiNet.Models;
using Microsoft.AspNetCore.Mvc;

namespace DemoApiNet.Controllers
{
    public class AutorController : Controller
    {
        [HttpGet("/autores")]
       public ActionResult<List<Autor>> GetAutores()
        {
            List<Autor> autores= new List<Autor>();

            autores.Add(new Autor(1, "Camilo José Cela"));
            autores.Add(new Autor(2, "Ramon Otero Pedrayo"));

            return autores;
        }
    }
}
