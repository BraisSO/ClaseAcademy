using BooksApi.Config;
using BooksApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BooksApi.Controllers
{

    [Route("/api/book")] 
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

            return Ok(book);

        }

        [HttpGet("list")]
        public async Task<ActionResult<List<Book>>> Get()
        {
            return await _context.books.ToListAsync<Book>();

        }

        [HttpPut("/update/{id}")]
        public async Task<ActionResult> Put(int id, Book book)
        {
            _context.Entry(book).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return Ok(book);

        }

        [HttpDelete("/delete/{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var libro = await _context.books.FindAsync(id);

            _context.Remove(libro);

            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("get/{id}")]
        public async Task<ActionResult<Book>> GetLibro(int id)
        {
            return Ok(await _context.books.FindAsync(id));
        }
            
            



    }
}
