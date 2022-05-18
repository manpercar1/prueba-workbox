import { Component, OnInit } from '@angular/core';
import { ListadoUsuariosService } from '../../services/listado-usuarios.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css'],
})
export class ListadoUsuariosComponent implements OnInit {
  public page: number = 1;

  public $usuarios: Observable<any> = new Observable();

  constructor(private service: ListadoUsuariosService) {}

  ngOnInit(): void {
    this.$usuarios = this.service.getUsuarios(this.page);
  }

  onClickUsuario(id: number) {
    console.log(id);
  }

  onClickPrev() {
    if (this.page > 1) this.page = this.page - 1;

    this.$usuarios = this.service.getUsuarios(this.page);
  }

  onClickNext() {
    if (this.page < 2) this.page = this.page + 1;

    this.$usuarios = this.service.getUsuarios(this.page);
  }
}
