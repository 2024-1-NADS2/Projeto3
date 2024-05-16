using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Comentario;
using api.Helpers;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class ComentarioRepository : IComentarioRepository
    {
        private readonly ApplicationDBContext _context;
        public ComentarioRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Comentario> CreateAsync(Comentario comentarioModel)
        {
            await _context.Comentarios.AddAsync(comentarioModel);
            await _context.SaveChangesAsync();
            return comentarioModel;
        }

        public async Task<Comentario?> DeleteAsync(int id)
        {
            var comentarioModel = await _context.Comentarios.FirstOrDefaultAsync(x => x.Id == id);

            if (comentarioModel == null)
            {
                return null;
            }
        
            _context.Comentarios.Remove(comentarioModel);
            await _context.SaveChangesAsync();

            return comentarioModel;
        }

        public async Task<List<Comentario>> GetAllAsync(QueryObject query)
        {
            var comentarios = _context.Comentarios.AsQueryable();

            if(!string.IsNullOrWhiteSpace(query.SortBy))
            {
                if(query.SortBy.Equals("Criado_em", StringComparison.OrdinalIgnoreCase))
                {
                    comentarios = query.IsDescending ? comentarios.OrderByDescending(u => u.Criado_em) : comentarios.OrderBy(u => u.Criado_em);
                }
            }

            var skipNumber = (query.PageNumber - 1) * query.PageSize;

            return await comentarios.Skip(skipNumber).Take(query.PageSize).ToListAsync();
        }

        public async Task<Comentario?> GetByIdAsync(int id)
        {
            return await _context.Comentarios.FindAsync(id);
        }

        public async Task<Comentario?> UpdateAsync(int id, UpdateComentarioRequestDto updateRequest)
        {
            var existingComentario = await _context.Comentarios.FindAsync(id);

            if (existingComentario == null)
            {
                return null;
            }

            existingComentario.Texto = updateRequest.Texto == "" ? existingComentario.Texto : updateRequest.Texto;
            existingComentario.Imagem = updateRequest.Imagem == "" ? existingComentario.Imagem : updateRequest.Imagem;
            existingComentario.Curtidas = updateRequest.Curtidas == 0 ? existingComentario.Curtidas : updateRequest.Curtidas;

            await _context.SaveChangesAsync();

            return existingComentario;
        }
    }
}