import { Component } from '@angular/core';

@Component({
  selector: 'app-livros-lista',
  templateUrl: './livros-lista.component.html',
  styleUrls: ['./livros-lista.component.css']
})
export class LivrosListaComponent {

  livros = [
    { titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien' },
    { titulo: 'Dom Casmurro', autor: 'Machado de Assis' },
    { titulo: 'Harry Potter', autor: 'J.K. Rowling' },
    ];

}
