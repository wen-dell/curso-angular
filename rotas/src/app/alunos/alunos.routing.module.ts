import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AlunosComponent } from "app/alunos/alunos.component";
import { AlunoDetalheComponent } from "app/alunos/aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "app/alunos/aluno-form/aluno-form.component";
import { AlunosGuard } from 'app/guards/alunos.guard';
import { AlunosDeactivateGuard } from "app/guards/alunos-deactivate.guard";

const alunosRoutes: Routes = [
    {
        path: '', component: AlunosComponent,
        canActivateChild: [AlunosGuard],
        children: [
            { path: 'novo', component: AlunoFormComponent,
             canDeactivate: [AlunosDeactivateGuard] },
            { path: ':id', component: AlunoDetalheComponent },
            { path: ':id/editar', component: AlunoFormComponent,
             canDeactivate: [AlunosDeactivateGuard] }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {

}