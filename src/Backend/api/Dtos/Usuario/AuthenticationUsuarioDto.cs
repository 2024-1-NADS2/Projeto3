using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Usuario
{
    public class AuthenticationUsuarioDto
    {
        [Required]
        [EmailAddress]
        public string Email{ get; set; } = string.Empty;

        [Required]
        [MinLength(8, ErrorMessage = "A senha deve ter no mínimo 8 caracteres")]
        [MaxLength(50, ErrorMessage = "A senha não pode ser maior que 50 caracteres")]
        public string Senha{ get; set; } = string.Empty;
    }
}