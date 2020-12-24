import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

const url: string = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  usuario = {
    Usuario: 'admin',
    Contraseña: 'admin',
    Role: 'administrador',
    Nombre: 'admin admin',
  };
  constructor(private http: HttpClient) {}

  login(login): Observable<any> {
    // return this.http.post(
    //   `https://consultoriovirtual.drcontigo.com/rest/prc_api_login_j`,
    //   login
    // );
    if (
      login.Usuario === this.usuario.Usuario &&
      login.Contraseña === this.usuario.Contraseña
    ) {
      return of(this.usuario);
    } else {
      return of('credenciales incorrectas!');
    }
  }
}
