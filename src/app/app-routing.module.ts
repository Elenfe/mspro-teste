import { NgModule, Component } from '@angular/core';
import { ProdutosComponent } from './produtos/produtos.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';
import { AulasComponent } from './aulas/aulas.component';
import { MaterialComponent } from './material/material.component';

import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',component: AulasComponent},
  {path:'produtos',component: ProdutosComponent},
  {path:'notificacoes',component: NotificacoesComponent},
  {path:'aulas',component: AulasComponent},
  {path:'material',component: MaterialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
