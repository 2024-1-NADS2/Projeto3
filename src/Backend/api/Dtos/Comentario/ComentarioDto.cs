using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Comentario
{
    public class ComentarioDto
    {
        public int Id { get; set; }
        public string Texto { get; set; } = string.Empty;
        public int Curtidas { get; set; }
        public DateTime Criado_em { get; set; } = DateTime.Now;
        public required int? PostId { get; set; }
        public required string? UsuarioEmail { get; set; }
    }
}