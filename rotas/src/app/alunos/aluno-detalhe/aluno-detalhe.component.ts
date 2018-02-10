import { Component, OnInit } from '@angular/core';
import { AlunosService } from 'app/alunos/alunos.service';

import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno: any;
  inscricao: Subscription;

  constructor(
     private alunoService: AlunosService,
     private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit() {
    let id: number;
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        id = params['id'];
        this.aluno = this.alunoService.getAluno(id);
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

}
