import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListadoUsuariosComponent } from './pages/listado-usuarios/listado-usuarios.component';
import { DetallesUsuarioComponent } from './pages/detalles-usuario/detalles-usuario.component';
import { EditarActuacionComponent } from './pages/editar-actuacion/editar-actuacion.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'listado',
    component: ListadoUsuariosComponent,
  },
  {
    path: 'actuacion/:id',
    component: DetallesUsuarioComponent,
  },
  {
    path: 'actuacion/:id/editar',
    component: EditarActuacionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
