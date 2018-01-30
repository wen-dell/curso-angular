import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  urlImagem: string = 'https://octodex.github.com/images/Professortocat_v2.png';
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  ativada: boolean = false;
  nome: string = 'abc';

  pessoa: any = {
    nome: 'Wendell',
    idade: 20
  };

  constructor() { }

  ngOnInit() {
  }

  botaoClicado() {
    alert("Botão foi clicado!");
  }

  onKeyUp(evento : KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  exibirMensagem() {
    alert("Você é demais! ;)");
  }

  verificarEntrada(evento: KeyboardEvent) {
    if (this.ativada) {
      this.ativada = false;
    } else {
      if (evento.key == 'CapsLock') {
        this.ativada = true;
        alert("Tecla Capslock está ativada!");
      }
    }
  }

}
