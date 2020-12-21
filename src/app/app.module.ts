import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { MaterialComponent } from './material/material.component';
import { AulasComponent } from './aulas/aulas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
      NotificacoesComponent,
      ProdutosComponent,
      MaterialComponent,
      AulasComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
