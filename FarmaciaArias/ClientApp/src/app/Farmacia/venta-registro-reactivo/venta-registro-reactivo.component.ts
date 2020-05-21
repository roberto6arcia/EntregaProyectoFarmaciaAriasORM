import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { NgbModal, ModalDismissReasons  } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../../@base/alert-modal/alert-modal.component';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from '../models/producto';
import { Venta } from '../models/venta';
import { VentaService } from 'src/app/services/venta.service';
import { ProductoConsultaModalComponent  } from '../../@base/producto-consulta-modal/producto-consulta-modal.component';


@Component({
  selector: 'app-venta-registro-reactivo',
  templateUrl: './venta-registro-reactivo.component.html',
  styleUrls: ['./venta-registro-reactivo.component.css']
})
export class VentaRegistroReactivoComponent implements OnInit {
  
  venta: Venta;
  formGroup: FormGroup;
  submitted = false;
  
  constructor(private ventaService: VentaService, private productoService: ProductoService, private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.venta = new Venta();
    let myDate = new Date();
    this.venta.productoId ='';
    this.venta.productoNombre ='';
    this.venta.codigoV = '';
    this.venta.precioV = 0;
    this.venta.cantidadV = 0;
    this.venta.fechadeventa = myDate;
    this.venta.totalV = 0;
    
    this.formGroup = this.formBuilder.group({
      productoId: [this.venta.productoId, Validators.required],
      productoNombre: [this.venta.productoNombre],
      codigoV: [this.venta.codigoV, Validators.required],    
      precioV: [this.venta.precioV, Validators.required],
      cantidadV: [this.venta.cantidadV, Validators.required],
      fechadeventa: [this.venta.fechadeventa, Validators.required],
      totalV: [this.venta.totalV, Validators.required ]

    });
  }

  get control() {
    return this.formGroup.controls;
  }

  buscarProducto() {
    this.productoService.getByIdentificacion(this.formGroup.value.productoId).subscribe(producto => {
        if (producto != null) {
            this.control['productoId'].setValue(producto.codigoP);
            this.control['productoNombre'].setValue(producto.nombreP);
        }
        else
        {
            this.openModalProducto();
        }
    });
}

//Manejo Modal
openModalProducto()
{
    this.modalService.open(ProductoConsultaModalComponent, { size: 'lg' }).result.then((producto) => this.actualizar(producto));
}

actualizar(producto: Producto) {
    
    this.formGroup.controls['productoId'].setValue(producto.codigoP);
    this.formGroup.controls['productoNombre'].setValue(producto.nombreP);
}
//Fin Manejo Modal

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.formGroup.invalid) {
      return;
    }
    this.add();
  }

  add() {
    this.venta = this.formGroup.value;
    this.ventaService.post(this.venta).subscribe(p => {
      if (p != null) {

        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Venta creado';

        this.venta = p;
      }
    });

  }


}
