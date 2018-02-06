import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService } from 'app/cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';
import { ReceberCursoCriadoComponent } from 'app/receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CriarCursoComponent],
  //providers: [CursosService]
})
export class CriarCursoModule { }
