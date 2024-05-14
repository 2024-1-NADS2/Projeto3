using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Comentario;

namespace api.Dtos.Post
{
    public class PostDto
    {
        public int Id { get; set; }
        public string Texto { get; set; } = string.Empty;
        public string Imagem { get; set; } = string.Empty;
        public int Curtidas { get; set; }
        public DateTime Criado_em { get; set; } = DateTime.Now;
        public string? UsuarioEmail { get; set; }
        public List<ComentarioDto>? Comentarios { get; set; } 
    }
}