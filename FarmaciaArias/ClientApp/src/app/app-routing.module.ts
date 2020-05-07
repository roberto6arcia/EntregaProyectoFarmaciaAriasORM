import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductoConsultaComponent } from './Farmacia/producto-consulta/producto-consulta.component';
import { ProductoRegistroComponent } from './Farmacia/producto-registro/producto-registro.component';
import { ProductoRegistroReactivoComponent } from './Farmacia/producto-registro-reactivo/producto-registro-reactivo.component';
import { ProductoEditarComponent } from './Farmacia/producto-editar/producto-editar.component';
import { LoginComponent } from './Farmacia/login/login.component';
import { AcercaDeComponent } from './Farmacia/acerca-de/acerca-de.component';


const routes: Routes = [
  {path: 'productoConsulta', component: ProductoConsultaComponent},
  {path: 'productoRegistro',component: ProductoRegistroComponent},
  {path: 'productoRegistroreactivo',component: ProductoRegistroReactivoComponent},
  {path: 'productoEditar',component: ProductoEditarComponent},
  {path: 'farmaciaLogin',component: LoginComponent},
  {path: 'acercaDeFarmacia',component: AcercaDeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
