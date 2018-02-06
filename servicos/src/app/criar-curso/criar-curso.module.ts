import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService } from 'app/cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';

@NgModule({
  declarations: [
    CriarCursoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CriarCursoComponent],
  //providers: [CursosService]
})
export class CriarCursoModule { }
