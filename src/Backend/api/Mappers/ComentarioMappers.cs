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
                Imagem = comentarioModel.Imagem,
                Curtidas = comentarioModel.Curtidas,
                Criado_em = comentarioModel.Criado_em,
                Post_id = comentarioModel.Post_id,
                Criado_por = comentarioModel.Criado_por,
            };
        }

        // public static ComentarioDto ToComentarioFromCreate(this CreateComentarioDto comentarioDto, string email)
        // {
        //     return new ComentarioDto
        //     {
        //         Texto = comentarioDto.Texto,
        //         Imagem = comentarioDto.Imagem,
        //         Curtidas = comentarioDto.Curtidas,
        //         Post_id = comentarioDto.Post_id,
        //         Criado_por = comentarioDto.Criado_por,
        //     };
        // }
    }
}