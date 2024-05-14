using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Post;
using api.Helpers;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/post")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepo;
        private readonly IUsuarioReporitory _usuarioRepo;
        public PostController(IPostRepository postRepo, IUsuarioReporitory usuarioRepo)
        {
            _postRepo = postRepo;
            _usuarioRepo = usuarioRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] QueryObject query){
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var posts = await _postRepo.GetAllAsync(query);

            var postsDto = posts.Select(s => s.ToPostDto());
        
            return Ok(postsDto);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id){
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var post = await _postRepo.GetByIdAsync(id);

            if(post == null)
            {
                return NotFound();
            }

            return Ok(post.ToPostDto());
        }

        [HttpPost("{email}")]
        public async Task<IActionResult> Create([FromRoute] string email, CreatePostDto postDto)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            if(!await _usuarioRepo.UsuarioExists(email))
            {
                return BadRequest("Usuário não existe!");
            }

            var postModel = postDto.ToPostFromCreate(email);
            await _postRepo.CreateAsync(postModel);
            return CreatedAtAction(nameof(GetById), new {id = postModel.Id}, postModel.ToPostDto());
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdatePostRequestDto updateDto)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var post = await _postRepo.UpdateAsync(id, updateDto.ToPostFromUpdate());
        
            if(post == null)
            {
                return NotFound("Post não encontrado!");
            }

            return Ok(post.ToPostDto());
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delet([FromRoute] int id)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var postModel = await _postRepo.DeleteAsync(id);
            
            if(postModel == null)
            {
                return NotFound("Post não existe!");
            }

            return Ok(postModel);
        }
    }
}