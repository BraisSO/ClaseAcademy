namespace FavoriteWebs.Models
{
    public class Web
    {
        public int Id{ get; set; }
        public string Url{ get; set; }
        public int UserId { get; set; }

        public User User { get; set; }
    }
}

