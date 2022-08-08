import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmarSenha: string
  tipoUser: string
  valideEmail: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }
  
  // Email(event: any){
  //   this.usuario= event.target.value
  //   if(this.usuario.usuario != this.valideEmail ){
    
  //   }
  // }

  // validEmail(event: any){
  //   let txtEmail = document.querySelector('#txtEmail')
  //   if(this.usuario.usuario ==this.indexOf ('@') == -1) {
  // alert('E-mail inválido!')

      //   txtEmail.innerHTML='E-mail inválido! ❌'
      //   txtEmail.style.color='red'
      //  } else{
      //      txtEmail.innerHTML='E-mail válido! ✔️'
      //      txtEmail.style.color='green'
//       //      emailOk = true
//        }    
// }
//MinimSenha(){
// this.usuario.senha < (como colocar um parametro de minimo de digitos?)

// }


  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }
  tipoUsuario(event: any) {
    this.tipoUser = event.target.value
  }
  cadastrar() {
    this.usuario.tipo = this.tipoUser
       //criar um alert para caso o usuário tente criar uma senha menor que 8 digitos.
    if (this.usuario.senha != this.confirmarSenha) {
      alert('As senhas digitas são diferentes!') //eu quero fazer a validação dos outros campos também!!
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {//o "subscribe", transforma o Objeto TypeScript em um tipo Json para que servidor entenda.
        this.usuario = resp
        this.router.navigate(['/login'])
        alert('Usuário cadastrado com sucesso!')
      })
    }

  }



}
