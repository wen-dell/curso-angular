import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.css']
})
export class DiretivaNgstyleComponent implements OnInit {

  destaque: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  destacar() {
    this.destaque = !this.destaque;
  }

}
