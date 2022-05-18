import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListadoUsuariosService {
  constructor(private http: HttpClient) {}

  getUsuarios(page: number): Observable<any> {
    return this.http.get<any>(
      'https://reqres.in/api/users?page=' + page.toString()
    );
  }
}
