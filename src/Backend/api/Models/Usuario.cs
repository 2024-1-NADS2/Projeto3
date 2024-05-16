using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Usuario
    {
        [Key]
        public required string Email { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Sobrenome { get; set; } = string.Empty;
        public string Senha { get; set; } = string.Empty;
        public string Imagem { get; set; } = string.Empty;
        public DateTime Criado_em { get; set; } = DateTime.Now;
        public List<Post> Posts { get; set; } = new List<Post>();
        public List<Comentario> Comentarios { get; set; } = new List<Comentario>();
    }
}

// email VARCHAR(100) PRIMARY KEY,
// nome VARCHAR(50) NOT NULL,
// sobrenome VARCHAR(50) NOT NULL,
// senha VARCHAR(50) NOT NULL CHECK (CHAR_LENGTH(senha) >= 8),
// criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP