using FavoriteWebs.Config;
using FavoriteWebs.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FavoriteWebs.Controllers
{
    [Route("/api/web")]
    public class WebController : Controller
    {

        private readonly AppDBContext _context;

        public WebController(AppDBContext context)
        {
            _context = context;

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Web>> GetWeb(int id)
        {
            var webExists = await _context.Webs.AnyAsync(x=>x.Id == id);

            if (!webExists) {
                return BadRequest($"La web con id {id} no existe");
            }

            return await _context.Webs.Include(x => x.User).FirstOrDefaultAsync(x=>x.Id == id);  
        } 

        [HttpPost("save")]
        public async Task<ActionResult> Save([FromBody]Web web)
        {

            _context.Add(web);

            await _context.SaveChangesAsync();  

            return Ok(web);
        }

        [HttpGet("list")]
        public async Task<ActionResult<List<Web>>> GetWebs()
        {
            return await _context.Webs.ToListAsync();
        }
        


        
    }
}
