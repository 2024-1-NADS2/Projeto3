using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Usuario;
using api.Models;

namespace api.Mappers
{
    public static class UsuarioMappers
    {
        public static UsuarioDto ToUsuarioDto(this Usuario usuarioModel)
        {
            return new UsuarioDto
            {
                Email = usuarioModel.Email,
                Nome = usuarioModel.Nome,
                Sobrenome = usuarioModel.Sobrenome,
                Criado_em = usuarioModel.Criado_em,
                Posts = usuarioModel.Posts.Select(c => c.ToPostDto()).ToList(),
                Comentarios = usuarioModel.Comentarios.Select(c => c.ToComentarioDto()).ToList()
            };
        }

        public static Usuario ToUsuarioFromCreateDTO(this CreateUsuarioRequestDto UsuarioDto)
        {
            return new Usuario
            {
                Email = UsuarioDto.Email,
                Nome = UsuarioDto.Nome,
                Sobrenome = UsuarioDto.Sobrenome,
                Senha = UsuarioDto.Senha,
            };
        }
    }
}