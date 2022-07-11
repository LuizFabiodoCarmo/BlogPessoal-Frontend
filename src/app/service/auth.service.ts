import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';


@Injectable({
  providedIn: 'root'
})
export class AuthService {//model de TypeScript

  constructor(
    private http: HttpClient // funciona por conta dos imports manuas em "app.module.ts" linha 1 e 23
  ) { }
//O service de autenticação/auth, terá dois métodos principais.
  login(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{//1           
   return this.http.post<UsuarioLogin>('http://localhost:8080/usuarios/logar',usuarioLogin) 
  }
  cadastrar(usuario: Usuario): Observable<Usuario>{//2
   return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar',usuario)
  }  
  
}
