using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Post;
using api.Helpers;
using api.Models;

namespace api.Interfaces
{
    public interface IPostRepository
    {
        Task<List<Post>> GetAllAsync(QueryObject query);
        Task<Post?> GetByEmailAsync(string email);
        Task<Post> CreateAsync(Post postModel);
        Task<bool> PostExists(int id);
        Task<Post?> UpdateAsync(int id, UpdatePostRequestDto updateRequest);
        Task<Post?> DeleteAsync(int id);
    }
}