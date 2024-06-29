import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiudadComponent } from './componentes/ciudad/ciudad.component';
import { PronosticoComponent } from './componentes/pronostico/pronostico.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';

const routes: Routes = [
  {path:'', redirectTo:'/clima',pathMatch:'full'},
  {path:'clima', component: CiudadComponent},
  {path:'pronostico', component: PronosticoComponent},
  {path: 'noEncontrado', component: NoEncontradoComponent},
  {path: '**', redirectTo: '/noEncontrado', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
