namespace Examen2Back.Models
{
    public class Curso
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public List<Alumno> Alumnos { get; set; }
    }
}
