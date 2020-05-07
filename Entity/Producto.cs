using System;
using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Producto
    {
        [Key]
        public string CodigoP { get; set; }
        public string NombreP { get; set; }
        public string LaboratorioP { get; set; }
        public DateTime Fechadevencimiento { get; set; }
        public int CantidadP { get; set; }
    }
}