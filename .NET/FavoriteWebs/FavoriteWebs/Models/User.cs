namespace FavoriteWebs.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public List<Web> Webs { get; set; }
    }
}
