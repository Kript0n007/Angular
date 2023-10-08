// src/app/components/person-list/person-list.component.ts
import { Component,inject } from '@angular/core';
import { Pessoa } from '../pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'pessoa_lista',
  templateUrl: './pessoa_lista.component.html',
  styleUrls: ['./pessoa_lista.component.css']
})
export class PessoaListaComponent {

  index!: number
  pessoas : Pessoa[] = [];
  modalService = inject(NgbModal);

  constructor() {}

  abrirModal(template: any){
    this.modalService.open(template, { size: 'lg' });
  }

  addNaLista(pessoa: Pessoa){
      let modoNovo = true;
      if(pessoa.id > 0){
        modoNovo = false;
      }else{
        if(this.pessoas.length != 0){
          let novoID = this.pessoas[this.pessoas.length-1].id+1
          pessoa.id = novoID
        }else{
          pessoa.id = 1; 
        }
      }
      if(modoNovo){
        this.pessoas.push(pessoa);
      }else{
        this.pessoas[this.index] = pessoa
      }
  
      this.modalService.dismissAll();
  }

}
