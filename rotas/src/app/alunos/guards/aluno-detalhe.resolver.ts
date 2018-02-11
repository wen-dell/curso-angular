import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Aluno } from 'app/alunos/aluno';
import { AlunosService } from 'app/alunos/alunos.service';

@Injectable()

export class AlunoDetalheResolver implements Resolve<Aluno> {

    constructor(private alunosService: AlunosService) {

    }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        let id = route.params['id'];

        return this.alunosService.getAluno(id);
    }

}