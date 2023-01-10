using BooksApi.Config;
using BooksApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BooksApi.Controllers
{
    public class BookController : Controller
    {

        private readonly DBBookContext _context;
        public BookController(DBBookContext context) 
        {
            _context = context;
        }

        [HttpPost("save")]
        public async Task<ActionResult> Post(Book book)
        {
            _context.Add(book); //añadir al contexto el libro
            await _context.SaveChangesAsync();

            return Ok();

        }

        [HttpGet("list")]
        public async Task<ActionResult<List<Book>>> Get()
        {
            return await _context.books.ToListAsync<Book>();

        }


    }
}
