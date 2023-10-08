import { Component, inject, EventEmitter, Output,Input,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoa-details',
  templateUrl: './pessoa-details.component.html',
  styleUrls: ['./pessoa-details.component.css']
})
export class PessoaDetailsComponent implements OnInit {

  roteador = inject(ActivatedRoute);

  @Input() pessoa: Pessoa = new Pessoa("");

  @Output() retorno = new EventEmitter<Pessoa>();

  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }

  salvar(){
    this.retorno.emit(this.pessoa);
  }

  ngOnInit(): void {
    this.pessoa = Object.assign({},this.pessoa);
}

}
