using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Helpers;
using api.Models;

namespace api.Interfaces
{
    public interface IComentarioRepository
    {
        Task<List<Comentario>> GetAllAsync(QueryObject query);
        Task<Comentario?> GetByIdAsync(int id);
        Task<Comentario> CreateAsync(Comentario comentarioModel);
        Task<Comentario?> UpdateAsync(int id, Comentario comentarioModel);
        Task<Comentario?> DeleteAsync(int id);
    }
}