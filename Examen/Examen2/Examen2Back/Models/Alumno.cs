namespace Examen2Back.Models
{
    public class Alumno
    {
            public int Id { get; set; }
            public string Nombre { get; set; }
            public int Edad { get; set; }
            public int CursoId { get; set; }
            public Curso Curso { get; set; }
        
    }
}
