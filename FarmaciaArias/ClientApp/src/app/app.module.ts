import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ProductoConsultaComponent } from './Farmacia/producto-consulta/producto-consulta.component';
import { ProductoRegistroComponent } from './Farmacia/producto-registro/producto-registro.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductoService } from './services/producto.service';
import { FiltroProductoPipe } from './pipe/filtro-producto.pipe';
import { LoginComponent } from './Farmacia/login/login.component';
import { ProductoRegistroReactivoComponent } from './Farmacia/producto-registro-reactivo/producto-registro-reactivo.component';
import { ProductoEditarComponent } from './Farmacia/producto-editar/producto-editar.component';
import { AcercaDeComponent } from './Farmacia/acerca-de/acerca-de.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProductoConsultaComponent,
    ProductoRegistroComponent,
    FiltroProductoPipe,
    LoginComponent,
    ProductoRegistroReactivoComponent,
    ProductoEditarComponent,
    AcercaDeComponent,
    AlertModalComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ]),
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  entryComponents: [AlertModalComponent],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
