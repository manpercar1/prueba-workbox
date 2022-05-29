import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoUsuariosComponent } from './pages/listado-usuarios/listado-usuarios.component';
import { DetallesUsuarioComponent } from './pages/detalles-usuario/detalles-usuario.component';
import { DireccionPipe } from './direccion.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarActuacionComponent } from './pages/editar-actuacion/editar-actuacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListadoUsuariosComponent,
    DetallesUsuarioComponent,
    DireccionPipe,
    EditarActuacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
