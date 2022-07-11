import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [ //rai de objetos de rotas 
{path:'', redirectTo:'login', pathMatch:'full'}, //criamos um path vázio para que seja redirecionada para login

{path:'cadastrar', component: CadastrarComponent},
{path:'login', component: LoginComponent},  

{path:'inicio', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
