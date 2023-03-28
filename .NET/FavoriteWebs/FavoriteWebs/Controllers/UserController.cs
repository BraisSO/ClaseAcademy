using FavoriteWebs.Config;
using FavoriteWebs.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace FavoriteWebs.Controllers
{
    [Route("/api/user")]
    public class UserController : Controller
    {
        private readonly AppDBContext _context;

        public UserController(AppDBContext context)
        {
            _context = context;
        }


        [HttpPost("save")]
        public async Task<ActionResult> Save([FromBody]User user)
        {
            if (user == null)
            {
                return BadRequest("Los campos no pueden estar vacíos");
            }
            else
            {
                _context.Add(user);

                await _context.SaveChangesAsync();

                return Ok(user);
            }

 
        }

        [HttpGet("list")]
        public async Task<ActionResult<List<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var userExist = await _context.Users.AnyAsync(x => x.Id == id);

            if (!userExist)
            {
                return BadRequest($"El usuario con id {id} no existe"); 
            }

            return await _context.Users.Include(x=>x.Webs).FirstOrDefaultAsync(x=>x.Id == id);
        }


    }
}
