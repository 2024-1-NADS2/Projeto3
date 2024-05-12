using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Comentario;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/comentario")]
    [ApiController]
    public class ComentarioController : ControllerBase
    {
        private readonly IComentarioRepository _comentarioRepo;
        private readonly IUsuarioReporitory _usuarioRepo;

        public ComentarioController(IComentarioRepository comentarioRepo, IUsuarioReporitory usuarioRepo)
        {
            _comentarioRepo = comentarioRepo; 
            _usuarioRepo = usuarioRepo;  
        }

        [HttpGet]
        public async Task<IActionResult> GetAll(){
            var comentarios = await _comentarioRepo.GetAllAsync();

            var comentarioDto = comentarios.Select(s => s.ToComentarioDto());
        
            return Ok(comentarioDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id){
            var comentario = await _comentarioRepo.GetByIdAsync(id);

            if(comentario == null)
            {
                return NotFound();
            }

            return Ok(comentario.ToComentarioDto());
        }
    
        // [HttpPost("{email}")]
        // public async Task<IActionResult> Create([FromRoute] string email, CreateComentarioDto comentarioDto)
        // {
        //     if(!await _usuarioRepo.UsuarioExists(email))
        //     {
        //         return BadRequest("Usuario não existe!");
        //     }

        //     var comentarioModel = comentarioDto
        // }
    }
}