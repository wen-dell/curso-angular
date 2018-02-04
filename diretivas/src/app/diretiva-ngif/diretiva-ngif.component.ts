import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  mostrarMensagem: boolean = false;
  isHidden: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onMostrarMensagem() {
    this.mostrarMensagem = !this.mostrarMensagem;
  }

  onHidden() {
    this.isHidden = !this.isHidden;
  }

}
