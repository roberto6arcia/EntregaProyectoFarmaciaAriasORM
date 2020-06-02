import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductoConsultaComponent } from './Farmacia/producto-consulta/producto-consulta.component';
import { ProductoRegistroComponent } from './Farmacia/producto-registro/producto-registro.component';
import { ProductoRegistroReactivoComponent } from './Farmacia/producto-registro-reactivo/producto-registro-reactivo.component';
import { ProductoEditarComponent } from './Farmacia/producto-editar/producto-editar.component';
import { LoginComponent } from './Farmacia/login/login.component';
import { AcercaDeComponent } from './Farmacia/acerca-de/acerca-de.component';
import { VentaRegistroReactivoComponent } from './Farmacia/venta-registro-reactivo/venta-registro-reactivo.component';
import { VentaConsultaComponent } from './Farmacia/venta-consulta/venta-consulta.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: 'productoConsulta', component: ProductoConsultaComponent,  canActivate: [AuthGuard]},
  {path: 'productoRegistro',component: ProductoRegistroComponent},
  {path: 'productoRegistroreactivo',component: ProductoRegistroReactivoComponent,  canActivate: [AuthGuard]},
  {path: 'productoEditar/:codigoP',component: ProductoEditarComponent,  canActivate: [AuthGuard]},
  {path: 'acercaDeFarmacia',component: AcercaDeComponent},
  {path: 'ventaRegistroreactivo',component: VentaRegistroReactivoComponent,  canActivate: [AuthGuard]},
  {path: 'ventaConsulta', component: VentaConsultaComponent,  canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
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
