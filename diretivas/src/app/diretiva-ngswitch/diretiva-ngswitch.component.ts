import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrls: ['./diretiva-ngswitch.component.css']
})
export class DiretivaNgswitchComponent implements OnInit {

  diaSemana: number = 1;

  constructor() { }

  ngOnInit() {
  }

  passar() {
    this.diaSemana++;
  }

  voltar() {
    this.diaSemana--;
  }

}
