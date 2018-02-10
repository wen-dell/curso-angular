import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlunosRoutingModule } from './alunos.routing.module';

import { AlunosComponent } from "app/alunos/alunos.component";
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosService } from "app/alunos/alunos.service";

@NgModule({
    imports: [
        CommonModule,
        AlunosRoutingModule,
        FormsModule
    ],
    exports: [
        AlunosComponent
    ],
    declarations: [
        AlunosComponent,
        AlunoFormComponent,
        AlunoDetalheComponent
    ],
    providers: [AlunosService]
})
export class AlunosModule {

}