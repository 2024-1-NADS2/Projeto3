using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Helpers;
using api.Models;

namespace api.Interfaces
{
    public interface IPostRepository
    {
        Task<List<Post>> GetAllAsync(QueryObject query);
        Task<Post?> GetByIdAsync(int id);
        Task<Post> CreateAsync(Post postModel);
        Task<bool> PostExists(int id);
        Task<Post?> UpdateAsync(int id, Post postModel);
        Task<Post?> DeleteAsync(int id);
    }
}