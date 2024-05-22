using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Post;
using api.Helpers;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class PostRepository : IPostRepository
    {
        private readonly ApplicationDBContext _context;
        public PostRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Post> CreateAsync(Post postModel)
        {
            await _context.Posts.AddAsync(postModel);
            await _context.SaveChangesAsync();
            return postModel;
        }

        public async Task<Post?> DeleteAsync(int id)
        {
            var postModel = await _context.Posts.FirstOrDefaultAsync(x => x.Id == id);
        
            if (postModel == null)
            {
                return null;
            }

            _context.Posts.Remove(postModel);
            await _context.SaveChangesAsync();

            return postModel;
        }

        public async Task<List<Post>> GetAllAsync(QueryObject query)
        {
            var posts = _context.Posts.Include(c => c.Comentarios).AsQueryable();

            if(!string.IsNullOrWhiteSpace(query.SortBy))
            {
                if(query.SortBy.Equals("Criado_em", StringComparison.OrdinalIgnoreCase))
                {
                    posts = query.IsDescending ? posts.OrderByDescending(u => u.Criado_em) : posts.OrderBy(u => u.Criado_em);
                }
            }
            var skipNumber = (query.PageNumber - 1) * query.PageSize;

            return await posts.Skip(skipNumber).Take(query.PageSize).ToListAsync();
        }

        public async Task<Post?> GetByEmailAsync(string email)
        {
            return await _context.Posts.Include(c => c.Comentarios).FirstOrDefaultAsync(i => i.UsuarioEmail == email);
        }

        public Task<bool> PostExists(int id)
        {
            return _context.Posts.AnyAsync(s => s.Id == id);
        }

        public async Task<Post?> UpdateAsync(int id, UpdatePostRequestDto updateRequest)
        {
            var existingPost = await _context.Posts.FindAsync(id);

            if (existingPost == null)
            {
                return null;
            }

            existingPost.Texto = updateRequest.Texto == "" ? existingPost.Texto : updateRequest.Texto;
            existingPost.Imagem = updateRequest.Imagem == "" ? existingPost.Imagem : updateRequest.Imagem;
            existingPost.Curtidas = updateRequest.Curtidas == 0 ? existingPost.Curtidas : updateRequest.Curtidas;

            await _context.SaveChangesAsync();

            return existingPost;
        }
    }
}