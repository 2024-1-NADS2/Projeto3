using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace api.Dtos.Usuario
{
    public class UpdateUsuarioRequestDto
    {
        [MaxLength(50, ErrorMessage = "Nome não pode ser maior que 50 caracteres")]
        public string Nome { get; set; } = string.Empty;
        [MaxLength(50, ErrorMessage = "Sobrenome não pode ser maior que 50 caracteres")]
        public string Sobrenome { get; set; } = string.Empty;
        [MinLength(8, ErrorMessage = "A senha deve ter no mínimo 8 caracteres")]
        [MaxLength(50, ErrorMessage = "A senha não pode ser maior que 50 caracteres")]
        public string Senha { get; set; } = string.Empty;
        public string Imagem { get; set; } = string.Empty;
    }
}