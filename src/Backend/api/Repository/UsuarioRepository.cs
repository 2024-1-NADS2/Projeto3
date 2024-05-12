using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Usuario;
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

        public async Task<List<Usuario>> GetAllAsync()
        {
            return await _context.Usuarios.Include(c => c.Comentarios).ToListAsync();
        }

        public async Task<Usuario?> GetByEmailAsync(string email)
        {
            return await _context.Usuarios.Include(c => c.Comentarios).FirstOrDefaultAsync(e => e.Email == email);
        }

        public async Task<Usuario?> UpdateAsync(string email, UpdateUsuarioRequestDto usuarioDto)
        {
            var existingUsuario = await _context.Usuarios.FirstOrDefaultAsync(x => x.Email == email);
        
            if(existingUsuario == null)
            {
                return null;
            }

            existingUsuario.Nome = usuarioDto.Nome;
            existingUsuario.Sobrenome = usuarioDto.Sobrenome;
            existingUsuario.Senha = usuarioDto.Senha;

            await _context.SaveChangesAsync();

            return existingUsuario;
        }

        public Task<bool> UsuarioExists(string email)
        {
            return _context.Usuarios.AnyAsync(s => s.Email == email);
        }
    }
}