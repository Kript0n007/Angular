// src/app/components/person-list/person-list.component.ts
import { Component } from '@angular/core';
import { Pessoa } from '../../models/pessoa.model';

@Component({
  selector: 'pessoa_lista',
  templateUrl: './pessoa_lista.component.html',
  styleUrls: ['./pessoa_lista.component.css']
})
export class PessoaListaComponent {
  pessoas : Pessoa[];
  somaIdadesMais30: number = 0;
  quantidade: number = 0;

  constructor() {
    this.pessoas = [
      { nome: 'Alice', idade: 25 },
      { nome: 'Bob', idade: 35 },
      { nome: 'Charlie', idade: 40 },
      { nome: 'David', idade: 28 },
      { nome: 'Eva', idade: 32 },
      { nome: 'Frank', idade: 45 },
      { nome: 'Grace', idade: 22 },
      { nome: 'Henry', idade: 38 },
      { nome: 'Ivy', idade: 31 },
      { nome: 'Jack', idade: 29 },
      { nome: 'Katie', idade: 41 },
      { nome: 'Leo', idade: 27 },
      { nome: 'Mia', idade: 33 },
      { nome: 'Nathan', idade: 37 },
      { nome: 'Olivia', idade: 26 },
      { nome: 'Paul', idade: 44 },
      { nome: 'Quinn', idade: 30 },
      { nome: 'Ryan', idade: 39 },
      { nome: 'Sophie', idade: 23 },
      { nome: 'Tom', idade: 34 },
      { nome: 'Uma', idade: 42 },
      { nome: 'Victor', idade: 24 },
      { nome: 'Wendy', idade: 36 },
      { nome: 'Xander', idade: 43 },
      { nome: 'Yara', idade: 21 },
      { nome: 'Zane', idade: 46 }
    ];

    this.calcularSomaIdadesMais30();
  }

  calcularSomaIdadesMais30() {
    for (let i = 0; i < this.pessoas.length; i++) {
      const pessoa = this.pessoas[i];
      if (pessoa.idade > 30) {
        this.somaIdadesMais30 += pessoa.idade;
        
      }else{
        this.quantidade += 1 ;
      }
    }
  }

}
