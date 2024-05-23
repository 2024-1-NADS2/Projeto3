using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Comentario;
using api.Models;

namespace api.Mappers
{
    public static class ComentarioMappers
    {
        public static ComentarioDto ToComentarioDto(this Comentario comentarioModel)
        {
            return new ComentarioDto
            {
                Id = comentarioModel.Id,
                Texto = comentarioModel.Texto,
                Curtidas = comentarioModel.Curtidas,
                Criado_em = comentarioModel.Criado_em,
                PostId = comentarioModel.PostId,
                UsuarioEmail = comentarioModel.UsuarioEmail,
            };
        }

        public static Comentario ToComentarioFromCreate(this CreateComentarioDto comentarioDto, string email, int postId)
        {
            return new Comentario
            {
                Texto = comentarioDto.Texto,
                Imagem = "",
                PostId = postId,
                UsuarioEmail = email
            };
        }

        public static Comentario ToComentarioFromUpdate(this UpdateComentarioRequestDto comentarioDto)
        {
            return new Comentario
            {
                Texto = comentarioDto.Texto,
                Curtidas = comentarioDto.Curtidas

            };
        }
    }
}