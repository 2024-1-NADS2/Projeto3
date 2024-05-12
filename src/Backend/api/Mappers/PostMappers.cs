using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Post;
using api.Models;

namespace api.Mappers
{
    public static class PostMappers
    {
        public static PostDto ToPostDto(this Post postModel)
        {
            return new PostDto
            {
                Id = postModel.Id,
                Texto = postModel.Texto,
                Imagem = postModel.Imagem,
                Curtidas = postModel.Curtidas,
                Criado_em = postModel.Criado_em,
                Criado_por = postModel.Criado_por,
            };
        }
    }
}