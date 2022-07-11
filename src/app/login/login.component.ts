import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 usuarioLogin: UsuarioLogin= new UsuarioLogin()

  constructor(
   private auth: AuthService, 
   private router: Router
  ) { }

  ngOnInit(){
  window.scroll(0,0)
  }

 login(){
  this.auth.login(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
    this.usuarioLogin=resp

   environment.token= this.usuarioLogin.token
   environment.nome= this.usuarioLogin.nome
   environment.foto= this.usuarioLogin.foto  //estava dando erro por que o "import" não tinha ".prod" no final
   environment.id= this.usuarioLogin.id

    // this.usuarioLogin.foto  

    // console.log(environment.token)
    // console.log(environment.nome)
    // console.log(environment.foto)
    // console.log(environment.id)


    this.router.navigate(['/inicio'])
  }, erro =>{
    if(erro.status ==500){
      alert('Usuário ou senha incorreta!')
    }
  })
 }


}
