using Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FarmaciaArias.Models
{
    public class VentaInputModel
    {
        [Required(ErrorMessage="El Codigo del producto es requerido")]
        public string ProductoId { get; set; }
        [Required]
        public string ProductoNombre { get; set; }
        [Required(ErrorMessage="El Codigo de venta es requerido")]
        public string CodigoV { get; set; }
        [Required(ErrorMessage="El Precio es requerido")]
        public int PrecioV { get; set; }
        [Required(ErrorMessage="La Fecha de venta es requerido")]
        public DateTime Fechadeventa { get; set; }
        [Required]
        [Range(1,100, ErrorMessage ="La cantidad debe ser entre 1 y 100")]
        public int CantidadV { get; set; }
        [Required]
        public int TotalV { get; set; }
    }
    public class VentaViewModel : VentaInputModel
    {
        public VentaViewModel()
        {
        }
        public VentaViewModel(Venta venta)
        {
            ProductoId = venta.ProductoId;
            ProductoNombre = venta.ProductoNombre;
            CodigoV = venta.CodigoV;        
            Fechadeventa = venta.Fechadeventa;
            PrecioV = venta.PrecioV;
            CantidadV = venta.CantidadV;
            TotalV = venta.TotalV;
        }
        public int TotalV { get; set; }
    }
}