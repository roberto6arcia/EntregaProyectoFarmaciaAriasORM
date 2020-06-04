using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Datos;
using Entity;
using Logica;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using FarmaciaArias.Models;
using Microsoft.AspNetCore.Authorization;

namespace FarmaciaArias.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController: ControllerBase
    {
        private readonly UserService _userService;
        public UserController(ProductosContext context)
        {
            _userService = new UserService(context);
        }
         // GET: api/User
        [HttpGet]
        public IEnumerable<UserViewModel> Gets()
        {
            var users = _userService.ConsultarTodos().Select(p=> new UserViewModel(p));
            return users;
        }

        // GET: api/User/5
        [HttpGet("{idUser}")]
        public ActionResult<UserViewModel> Get(string idUser)
        {
            var user = _userService.BuscarxIdentificacion(idUser);
            if (user == null) return NotFound();
            var userViewModel = new UserViewModel(user);
            return userViewModel;
        }
        
        // POST: api/User
        [HttpPost]
        public ActionResult<UserViewModel> Post(UserInputModel userInput)
        {
            User user = MapearUser(userInput);
            var response = _userService.Guardar(user);
            if (response.Error) 
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.User);
        }
      
        // DELETE: api/User/5
        [HttpDelete("{idUser}")]
        public ActionResult<string> Delete(string idUser)
        {
            string mensaje = _userService.Eliminar(idUser);
            return Ok(mensaje);
        }
        private User MapearUser(UserInputModel userInput)
        {
            var user = new User
            {
                UserName = userInput.UserName,
                Password = userInput.Password,
                FirstName = userInput.FirstName,
                LastName = userInput.LastName,
                IdUser = userInput.IdUser,
                Role = userInput.Role,
            };
            return user;
        }
        // PUT: api/User/5
        [HttpPut("{idUser}")]
        public ActionResult<string> Put(string idUser, User user)
        {
            throw new NotImplementedException();
        }
    }
    
}