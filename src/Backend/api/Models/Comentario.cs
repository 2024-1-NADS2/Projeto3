using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Comentario
    {
        public int Id { get; set; }
        public string Texto { get; set; } = string.Empty;
        public int Curtidas { get; set; }
        public DateTime Criado_em { get; set; } = DateTime.Now;
        public int? PostId { get; set; }
        public Post? Post { get; set; }
        public string? UsuarioEmail { get; set; }
        public Usuario? Usuario { get; set; }
        public string Imagem { get; internal set; }
    }
}