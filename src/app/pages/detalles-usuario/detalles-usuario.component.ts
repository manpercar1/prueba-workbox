import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ListadoUsuariosService } from 'src/app/services/listado-usuarios.service';

@Component({
  selector: 'app-detalles-usuario',
  templateUrl: './detalles-usuario.component.html',
  styleUrls: ['./detalles-usuario.component.css'],
})
export class DetallesUsuarioComponent implements OnInit {
  public usuarioId = this.acRoute.snapshot.params['id'];
  public $usuario: Observable<any> = new Observable();

  constructor(
    private service: ListadoUsuariosService,
    private router: Router,
    private acRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.$usuario = this.service.getActuacion(this.usuarioId);
  }

  volver(): void {
    this.router.navigate(['listado']);
  }

  editar(): void {
    this.router.navigate(['actuacion/' + this.usuarioId + '/editar']);
  }
}
