using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace api.Dtos.Usuario
{
    public class ImagemUsuarioRequestDto
    {
        public string Imagem { get; set; } = string.Empty;
    }
}