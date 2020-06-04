using Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FarmaciaArias.Models
{
    public class UserInputModel
    {
        [Required(ErrorMessage="El UserName del usuario es requerido")]
        public string UserName { get; set; }
        [Required(ErrorMessage="El Password del usuario es requerido")]
        public string Password { get; set; }
        [Required(ErrorMessage="El FirstName del usuario es requerido")]
        public string FirstName { get; set; }
        [Required(ErrorMessage="El LastName del usuario es requerido")]
        public string LastName { get; set; }
        [Required(ErrorMessage="El IdUser del usuario es requerido")]
        public string IdUser { get; set; }
        [Required(ErrorMessage="El Role del usuario es requerido")]
        public string Role { get; set; }
    }

    public class UserViewModel : UserInputModel
    {
        public UserViewModel()
        {
        }
        public UserViewModel(User user)
        {
            UserName = user.UserName;
            Password = user.Password;
            FirstName = user.FirstName;        
            LastName = user.LastName;
            IdUser = user.IdUser;
            Role = user.Role;
        }
    }
}