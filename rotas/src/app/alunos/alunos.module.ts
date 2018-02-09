import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos.routing.module';

import { AlunosComponent } from "app/alunos/alunos.component";
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

@NgModule({
    imports: [
        CommonModule,
        AlunosRoutingModule
    ],
    exports: [
        AlunosComponent
    ],
    declarations: [
        AlunosComponent,
        AlunoFormComponent,
        AlunoDetalheComponent
    ],
    providers: []
})
export class AlunosModule {

}