import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';

import { CursosService } from './cursos.service';
import { CursosComponent } from 'app/cursos/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosRoutingModule } from './cursos.routing.module';

@NgModule({
    imports: [
        CommonModule,
        CursosRoutingModule
    ],
    exports: [
        CursosComponent,
        CursoNaoEncontradoComponent,
        CursoDetalheComponent
    ],
    declarations: [
        CursosComponent,
        CursoNaoEncontradoComponent,
        CursoDetalheComponent
    ],
    providers: [CursosService]
})
export class CursosModule {

}