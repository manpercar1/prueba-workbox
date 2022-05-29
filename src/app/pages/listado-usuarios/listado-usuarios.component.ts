import { Component, OnInit } from '@angular/core';
import { ListadoUsuariosService } from '../../services/listado-usuarios.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css'],
})
export class ListadoUsuariosComponent implements OnInit {
  public page: number = 1;

  public $usuarios: Observable<any> = new Observable();

  constructor(
    private router: Router,
    private service: ListadoUsuariosService
  ) {}

  ngOnInit(): void {
    this.$usuarios = this.service.getActuaciones(this.page);
  }

  onClickUsuario(id: number) {
    this.router.navigate(['actuacion/' + id]);
  }

  onClickPrev() {
    if (this.page > 1) this.page = this.page - 1;

    this.$usuarios = this.service.getActuaciones(this.page);
  }

  onClickNext() {
    if (this.page < 6) this.page = this.page + 1;

    this.$usuarios = this.service.getActuaciones(this.page);
  }

  onClickPrimera() {
    this.page = 1;
    this.$usuarios = this.service.getActuaciones(this.page);
  }

  onClickUltima() {
    this.page = 6;
    this.$usuarios = this.service.getActuaciones(this.page);
  }
}
