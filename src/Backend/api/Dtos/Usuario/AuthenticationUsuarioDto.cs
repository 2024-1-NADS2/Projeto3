using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Usuario
{
    public class AuthenticationUsuarioDto
    {
        public string Email{ get; set; } = string.Empty;

        public string Senha{ get; set; } = string.Empty;
    }
}