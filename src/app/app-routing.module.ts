import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [ //rai de objetos de rotas 
{path:'', redirectTo: 'login', pathMatch: 'full'}, //criamos um path vázio para que seja redirecionada para 'login'
{path:'login', component: LoginComponent},  
{path: 'cadastrar', component: CadastrarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
