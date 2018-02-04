import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit {

  linguagens: string[] = ['Python', 'PHP', 'Java', 'JavaScript', 'C#', 'C', 'SQL'];

  constructor() { }

  ngOnInit() {
  }

}
