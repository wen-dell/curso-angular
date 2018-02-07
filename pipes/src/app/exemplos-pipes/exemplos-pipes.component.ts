import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd Ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2015, 5, 23),
    url: 'http://a.co/glgjpRP'
  };

  filtro: string;

  livros: string[] = ['Angular', 'Java'];

  quantidade: number = 10;

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  valorAsync2 = Observable.interval(2000).map(valor => 'Valor assíncrono 2');

  constructor() { }

  ngOnInit() {
  }

  addLivro(livro: string) {
    this.livros.push(livro);
  }

}
