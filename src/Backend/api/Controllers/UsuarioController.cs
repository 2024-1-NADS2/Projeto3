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

            var senhaCriptografada =  BCrypt.Net.BCrypt.HashPassword(usuarioDto.Senha);

            usuarioModel.Senha = senhaCriptografada;
            await _usuarioRepo.CreateAsync(usuarioModel);
            return CreatedAtAction(nameof(GetByEmail), new { usuarioModel.Email }, usuarioModel.ToUsuarioDto());
        }

        [HttpPut]
        [Route("{email}")]
        public async Task<IActionResult> AdicionarAlterarImagem([FromRoute] string email, [FromBody] ImagemUsuarioRequestDto imagemDto)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var usuarioModel = await _usuarioRepo.UpdateAsync(email, imagemDto);

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

        [HttpPost("autenticacaoUsuario")]
        public async Task<IActionResult> AutenticacaoUsuario([FromBody] AuthenticationUsuarioDto authUsuario){

            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var usuarioVerificado = await _usuarioRepo.UsuarioHasAccount(authUsuario.Email, authUsuario.Senha);

            if(usuarioVerificado == false)
            {
                return BadRequest("Usúario ou senha estão incorretos!");
            }

            return Ok(authUsuario.Email);
       }
       [HttpPost("resetSenha")]
        public async Task<IActionResult> ResetSenha([FromBody] AuthenticationUsuarioDto authUsuario){

            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var senhaCriptografada =  BCrypt.Net.BCrypt.HashPassword(authUsuario.Senha);

            var usuario = await _usuarioRepo.ResetSenha(authUsuario.Email, senhaCriptografada);

            if(usuario == false)
            {
                return NotFound();
            }

            return Ok(authUsuario.Email);
       }
    }
}