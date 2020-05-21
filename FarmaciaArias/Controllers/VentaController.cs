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

namespace FarmaciaArias.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VentaController: ControllerBase
    {
         private readonly VentaService _ventaService;
        public VentaController(ProductosContext context)
        {
            _ventaService = new VentaService(context);
        }
         // GET: api/Venta
        [HttpGet]
        public IEnumerable<VentaViewModel> Gets()
        {
            var ventas = _ventaService.ConsultarTodos().Select(p=> new VentaViewModel(p));
            return ventas;
        }

        // GET: api/Venta/5
        [HttpGet("{codigoV}")]
        public ActionResult<VentaViewModel> Get(string codigoV)
        {
            var venta = _ventaService.BuscarxIdentificacion(codigoV);
            if (venta == null) return NotFound();
            var ventaViewModel = new VentaViewModel(venta);
            return ventaViewModel;
        }
        
        // POST: api/Venta
        [HttpPost]
        public ActionResult<VentaViewModel> Post(VentaInputModel ventaInput)
        {
            Venta venta = MapearVenta(ventaInput);
            var response = _ventaService.Guardar(venta);
            if (response.Error) 
            {
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Venta);
        }
      
        // DELETE: api/Venta/5
        [HttpDelete("{codigoV}")]
        public ActionResult<string> Delete(string codigoV)
        {
            string mensaje = _ventaService.Eliminar(codigoV);
            return Ok(mensaje);
        }
        private Venta MapearVenta(VentaInputModel ventaInput)
        {
            var venta = new Venta
            {
                CodigoV = ventaInput.CodigoV,
                ProductoId = ventaInput.ProductoId,
                ProductoNombre = ventaInput.ProductoNombre,
                PrecioV = ventaInput.PrecioV,
                Fechadeventa = ventaInput.Fechadeventa,
                CantidadV = ventaInput.CantidadV,
                TotalV = ventaInput.TotalV
            };
            return venta;
        }
        // PUT: api/Venta/5
        [HttpPut("{codigoV}")]
        public ActionResult<string> Put(string codigoV, Venta venta)
        {
            throw new NotImplementedException();
        }
    }
        
}