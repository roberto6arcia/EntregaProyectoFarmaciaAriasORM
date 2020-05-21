using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace Entity
{
    public class Venta
    {
        [Key]
        public string ProductoId { get; set; }
        public string ProductoNombre { get; set; }
        public string CodigoV { get; set; }
        public DateTime Fechadeventa { get; set; }
        public int PrecioV { get; set; }
        public int CantidadV { get; set; }
        public int TotalV { get; set; }
        public void CalcularVenta() 
        {
            TotalV = PrecioV*CantidadV;
        }

    }
}