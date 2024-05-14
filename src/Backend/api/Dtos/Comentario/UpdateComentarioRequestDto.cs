using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Comentario
{
    public class UpdateComentarioRequestDto
    {
        [Required]
        [MaxLength(250, ErrorMessage = "Texto não pode ser maior que 250 caracteres")]
        public string Texto { get; set; } = string.Empty;
        [Required]
        public string Imagem { get; set; } = string.Empty;
        [Required]
        public int Curtidas { get; set; }
    }
}