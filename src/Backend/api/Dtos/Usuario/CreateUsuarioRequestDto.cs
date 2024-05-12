using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace api.Dtos.Usuario
{
    public class CreateUsuarioRequestDto
    {
        [Key]
        public required string Email { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Sobrenome { get; set; } = string.Empty;
        public string Senha { get; set; } = string.Empty;
    }
}