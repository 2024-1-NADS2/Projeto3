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
        public string Imagem { get; set; } = string.Empty;
        public int Curtidas { get; set; }
        public DateTime Criado_em { get; set; } = DateTime.Now;
        public int? Post_id { get; set; }
        public required string? Criado_por { get; set; }
    }
}