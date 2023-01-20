import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { CadastroUsuarioComponent } from '../components/cadastro-usuario/cadastro-usuario.component';
import { ReservationsComponent } from '../components/reservations/reservations.component';


const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'login',  component: LoginComponent},
  {path:'cadastro-usuario',  component: CadastroUsuarioComponent },
  {path:'reservations',  component: ReservationsComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
