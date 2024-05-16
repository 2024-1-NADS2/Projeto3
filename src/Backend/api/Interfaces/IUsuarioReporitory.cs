using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Usuario;
using api.Helpers;
using api.Models;

namespace api.Interfaces
{
    public interface IUsuarioReporitory
    {
        Task<List<Usuario>> GetAllAsync(QueryObject query);
        Task<Usuario?> GetByEmailAsync(string email);
        Task<Usuario> CreateAsync(Usuario usuarioModel); 
        Task<Usuario?> UpdateAsync(string email, UpdateUsuarioRequestDto usuarioDto); 
        Task<Usuario?> DeleteAsync(string email);
        Task<bool> UsuarioExists(string email);
        Task<bool> UsuarioHasAccount(string email, string senha);
    }
}