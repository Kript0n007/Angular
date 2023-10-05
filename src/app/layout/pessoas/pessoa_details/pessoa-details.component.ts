import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../../../models/pessoa/pessoa';

@Component({
  selector: 'app-pessoa-details',
  templateUrl: './pessoa-details.component.html',
  styleUrls: ['./pessoa-details.component.css']
})
export class PessoaDetailsComponent {

  roteador = inject(ActivatedRoute);
  pessoa!: Pessoa;


  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }

}
