import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
import { CursosModule } from 'app/cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundoComponent
  ],
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
