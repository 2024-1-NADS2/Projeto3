using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Comentario;
using api.Dtos.Post;
using api.Helpers;
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
        private readonly IPostRepository _postRepo;

        public ComentarioController(IComentarioRepository comentarioRepo, IUsuarioReporitory usuarioRepo, IPostRepository postRepo)
        {
            _comentarioRepo = comentarioRepo; 
            _usuarioRepo = usuarioRepo;  
            _postRepo = postRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] QueryObject query)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var comentarios = await _comentarioRepo.GetAllAsync(query);

            var comentarioDto = comentarios.Select(s => s.ToComentarioDto());
        
            return Ok(comentarioDto);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id){
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var comentario = await _comentarioRepo.GetByIdAsync(id);

            if(comentario == null)
            {
                return NotFound();
            }

            return Ok(comentario.ToComentarioDto());
        }
    
        [HttpPost("{email},{postId:int}")]
        public async Task<IActionResult> Create([FromRoute] string email, int postId, CreateComentarioDto comentarioDto)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            if(!await _usuarioRepo.UsuarioExists(email))
            {
                return BadRequest("Usuario não existe!");
            }

            if(!await _postRepo.PostExists(postId))
            {
                return BadRequest("Post não existe!");
            }

            var comentarioModel = comentarioDto.ToComentarioFromCreate(email, postId);
            await _comentarioRepo.CreateAsync(comentarioModel);
            Console.WriteLine(comentarioModel);
            return CreatedAtAction(nameof(GetById), new {id = comentarioModel.Id}, comentarioModel.ToComentarioDto());
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateComentarioRequestDto updateDto)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var comentario = await _comentarioRepo.UpdateAsync(id, updateDto);

            if(comentario == null)
            {
                return NotFound("Comentário não encontrado!");
            }

            return Ok(comentario.ToComentarioDto());
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var comentarioModel = await _comentarioRepo.DeleteAsync(id);
            
            if(comentarioModel == null)
            {
                return NotFound("Comentário não existe!");
            }

            return Ok(comentarioModel);
        }
    }
}