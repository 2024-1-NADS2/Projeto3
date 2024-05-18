using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Comentario
    {
        public int Id { get; set; }
        public string Texto { get; set; } = string.Empty;
        public int Curtidas { get; set; }
        public DateTime Criado_em { get; set; } = DateTime.Now;
        public int? PostId { get; set; }
        public Post? Post { get; set; }
        public string? UsuarioEmail { get; set; }
        public Usuario? Usuario { get; set; }
    }
}

// create table comentarios(
// id int auto_increment primary key,
// texto varchar(250),
// imagens varchar(1500),
// criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
// curtidas int,
// criado_por varchar(100) not null,
// FOREIGN KEY (criado_por) REFERENCES usuarios(email)
// );