using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Usuario;
using api.Helpers;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/usuario")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly IUsuarioReporitory _usuarioRepo;
        public UsuarioController(ApplicationDBContext context, IUsuarioReporitory usuarioRepo)
        {
            _usuarioRepo = usuarioRepo;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetALL([FromQuery] QueryObject query)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var usuarios = await _usuarioRepo.GetAllAsync(query);

            var usuarioDto = usuarios.Select(s => s.ToUsuarioDto());

            return Ok(usuarioDto);
        }        

        [HttpGet("{email}")]
        public async Task<IActionResult> GetByEmail([FromRoute] string email)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var usuario = await _usuarioRepo.GetByEmailAsync(email);

            if(usuario == null)
            {
                return NotFound();
            }

            return Ok(usuario.ToUsuarioDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateUsuarioRequestDto usuarioDto){
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var usuarioModel = usuarioDto.ToUsuarioFromCreateDTO();
            await _usuarioRepo.CreateAsync(usuarioModel);
            return CreatedAtAction(nameof(GetByEmail), new { usuarioModel.Email }, usuarioModel.ToUsuarioDto());
        }

        [HttpPut]
        [Route("{email}")]
        public async Task<IActionResult> Update([FromRoute] string email, [FromBody] UpdateUsuarioRequestDto updateDto)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var usuarioModel = await _usuarioRepo.UpdateAsync(email, updateDto);

            if(usuarioModel == null)
            {
                return NotFound();
            }

            return Ok(usuarioModel.ToUsuarioDto());
        }
        
        [HttpDelete]
        [Route("{email}")]

        public async Task<IActionResult> Delete([FromRoute] string email)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var usuarioModel = await _usuarioRepo.DeleteAsync(email);
            
            if (usuarioModel == null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}