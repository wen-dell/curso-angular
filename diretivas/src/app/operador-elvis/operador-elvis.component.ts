import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.css']
})
export class OperadorElvisComponent implements OnInit {

  tarefas: any = [
    {
      descricao: 'Consertar bug ao cadastrar produto',
      prioridade: 'ALTA',
      responsavel: {
        nome: 'Rodrigo',
        idade: 22
      }
    },
    {
      descricao: 'Finaliza layout da página de login',
      prioridade: 'MÉDIA',
      responsavel: null
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
