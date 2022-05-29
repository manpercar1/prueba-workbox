import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListadoUsuariosService {
  constructor(private http: HttpClient) {}

  getActuaciones(page: number): Observable<any> {
    return this.http.get<any>(
      'http://127.0.0.1:8000/actuaciones/list?page=' + page.toString()
    );
  }

  getActuacion(id: number): Observable<any> {
    return this.http.get<any>(
      'http://127.0.0.1:8000/actuaciones/' + id.toString()
    );
  }

  editarActuacion(id: number, actuacion: any): Observable<any> {
    return this.http.put<any>(
      'http://127.0.0.1:8000/actuaciones/update/' + id.toString(),
      actuacion
    );
  }
}
