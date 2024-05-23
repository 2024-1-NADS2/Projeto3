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
                UsuarioEmail = postModel.UsuarioEmail,
                Comentarios = postModel.Comentarios.Select(c => c.ToComentarioDto()).ToList(),
            };
        }

        public static Post ToPostFromCreate(this CreatePostDto postDto, string email)
        {
            return new Post
            {
                Texto = postDto.Texto,
                Imagem = postDto.Imagem,
                UsuarioEmail = email,
            };
        }

        public static Post ToPostFromUpdate(this UpdatePostRequestDto postDto)
        {
            return new Post
            {
                Texto = postDto.Texto,
                Imagem = postDto.Imagem,
                Curtidas = postDto.Curtidas,
            };
        }
    }
}