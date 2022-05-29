import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ListadoUsuariosService } from 'src/app/services/listado-usuarios.service';

@Component({
  selector: 'app-editar-actuacion',
  templateUrl: './editar-actuacion.component.html',
  styleUrls: ['./editar-actuacion.component.css'],
})
export class EditarActuacionComponent implements OnInit {
  public actuacionId = this.acRoute.snapshot.params['id'];
  public $actuacion: Observable<any> = new Observable();

  public formActuacion!: FormGroup;

  constructor(
    private service: ListadoUsuariosService,
    private router: Router,
    private acRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.$actuacion = this.service.getActuacion(this.actuacionId);

    this.$actuacion.subscribe((actuacion) => {
      this.formActuacion = this.formBuilder.group({
        descripcion: [actuacion.descripcion, [Validators.required]],
        direccion: [actuacion.direccion, [Validators.required]],
        lat: [actuacion.lat, [Validators.required]],
        lng: [actuacion.lng, [Validators.required]],
        urgente: [actuacion.urgente, [Validators.required]],
        citada: [actuacion.citada, [Validators.required]],
        hora_cita: [actuacion.hora_cita, [Validators.required]],
      });
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.service
      .editarActuacion(this.actuacionId, this.formActuacion.value)
      .subscribe((actuacion) => {
        this.router.navigate(['actuacion/' + this.actuacionId]);
      });
  }

  volver(): void {
    this.router.navigate(['actuacion/' + this.actuacionId]);
  }
}
