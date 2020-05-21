using Datos;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class VentaService
    {
         private readonly ProductosContext _context;
        public VentaService(ProductosContext context)
        {
           _context = context;
        }
        public GuardarVentaResponse Guardar(Venta venta)
        {
            try
            {
                var ventaAux = _context.Ventas.Find(venta.CodigoV);
                if (ventaAux != null)
                {
                    return new GuardarVentaResponse($"Error de la Aplicacion: La venta ya se encuentra registrado!");
                } 

                 venta.CalcularVenta();       
              
                _context.Ventas.Add(venta);
                _context.SaveChanges();
                return new GuardarVentaResponse(venta);
            }
            catch (Exception e)
            {
                return new GuardarVentaResponse($"Error de la Aplicacion: {e.Message}");
            }
        }
        public List<Venta> ConsultarTodos()
        {
            
            List<Venta> ventas = _context.Ventas.ToList();
            return ventas;
        }
        public string Eliminar(string codigoV)
        {
            try
            {
                
                var venta = _context.Ventas.Find(codigoV);
                if (venta != null)
                {
                    _context.Ventas.Remove(venta);
                    return ($"El registro {venta.CodigoV} se ha eliminado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {codigoV} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }

        }
        public Venta BuscarxIdentificacion(string codigoV)
        {
            
            Venta venta = _context.Ventas.Find(codigoV);
            return venta;
        }
    }

    public class GuardarVentaResponse 
    {
        public GuardarVentaResponse(Venta venta)
        {
            Error = false;
            Venta = venta;
        }
        public GuardarVentaResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Venta Venta { get; set; }
        
    }
}