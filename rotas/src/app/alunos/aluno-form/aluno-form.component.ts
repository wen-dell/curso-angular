import { ActivatedRoute } from '@angular/router';
import { AlunosService } from 'app/alunos/alunos.service';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  aluno: any;
  inscricao: Subscription;
  formMudou: boolean = false;

  constructor(private alunoService: AlunosService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id: number;
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        id = params['id'];
        this.aluno = this.alunoService.getAluno(id);

        if (this.aluno === null) {
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
  }

  podeMudarRota() {
    if (this.formMudou) {
      confirm('Tem certeza que deseja sair dessa página?');
    }

    return true;
  }

}
