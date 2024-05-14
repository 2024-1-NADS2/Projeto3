using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using api.Dtos.Comentario;
using api.Dtos.Post;


namespace api.Dtos.Usuario
{
    public class UsuarioDto
    {
        [Key]
        public required string Email { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Sobrenome { get; set; } = string.Empty;
        public string Senha { get; set; } = string.Empty;
        public DateTime Criado_em { get; set; } = DateTime.Now;
        public List<PostDto>? Posts { get; set; }
        public List<ComentarioDto>? Comentarios { get; set; }
    }
}