using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Usuario;
using api.Helpers;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class UsuarioRepository : IUsuarioReporitory
    {
        private readonly ApplicationDBContext _context;
        public UsuarioRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Usuario> CreateAsync(Usuario usuarioModel)
        {
            await _context.Usuarios.AddAsync(usuarioModel);
            await _context.SaveChangesAsync();
            return usuarioModel;
        }

        public async Task<Usuario?> DeleteAsync(string email)
        {
            var usuarioModel = await _context.Usuarios.FirstOrDefaultAsync(x => x.Email == email);
        
            if (usuarioModel == null)
            {
                return null;
            }

            _context.Usuarios.Remove(usuarioModel);
            await _context.SaveChangesAsync();
            return usuarioModel;
        }

        public async Task<List<Usuario>> GetAllAsync(QueryObject query)
        {
            var usuarios =  _context.Usuarios
                .Include(u => u.Comentarios)  // Carrega os comentários associados aos usuários
                .Include(u => u.Posts)        // Carrega os posts associados aos usuários
                .ThenInclude(p => p.Comentarios)  // Carrega os comentários associados aos posts dos usuários
                .AsQueryable();
            
            if(!string.IsNullOrWhiteSpace(query.Nome))
            {
                usuarios = usuarios.Where(u => u.Nome.Contains(query.Nome));
            }

            if(!string.IsNullOrWhiteSpace(query.SortBy))
            {
                if(query.SortBy.Equals("Criado_em", StringComparison.OrdinalIgnoreCase))
                {
                    usuarios = query.IsDescending ? usuarios.OrderByDescending(u => u.Criado_em) : usuarios.OrderBy(u => u.Criado_em);
                }
            }

            var skipNumber = (query.PageNumber - 1) * query.PageSize;


            return await usuarios.Skip(skipNumber).Take(query.PageSize).ToListAsync();
        }

        public async Task<Usuario?> GetByEmailAsync(string email)
        {
            return await _context.Usuarios
                .Include(u => u.Comentarios) // Carrega os comentários associados aos usuários
                .Include(u => u.Posts)       // Carrega os posts associados aos usuários
                .FirstOrDefaultAsync(e => e.Email == email);
        }

        public async Task<Usuario?> UpdateAsync(string email, UpdateUsuarioRequestDto updateRequest)
        {
            var existingUsuario = await _context.Usuarios.FirstOrDefaultAsync(x => x.Email == email);
        
            if(existingUsuario == null)
            {
                return null;
            }

            existingUsuario.Nome = updateRequest.Nome == "" ? existingUsuario.Nome : updateRequest.Nome;
            existingUsuario.Sobrenome = updateRequest.Sobrenome == "" ? existingUsuario.Sobrenome : updateRequest.Sobrenome;
            existingUsuario.Senha = updateRequest.Senha == "" ? existingUsuario.Senha : updateRequest.Senha;
            existingUsuario.Imagem = updateRequest.Imagem == "" ? existingUsuario.Imagem : updateRequest.Imagem;

            await _context.SaveChangesAsync();

            return existingUsuario;
        }

        public Task<bool> UsuarioExists(string email)
        {
            return _context.Usuarios.AnyAsync(s => s.Email == email);
        }

        public async Task<bool> UsuarioHasAccount(string email, string senha)
        {
            var usuario = await _context.Usuarios.FirstOrDefaultAsync(e => e.Email == email);

            if (usuario != null)
            {
                return BCrypt.Net.BCrypt.Verify(senha, usuario.Senha);
            }
            else
            {
                return false;
            }
        }
    }
}