import { Component,inject } from '@angular/core';
import { Livro } from '../livro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-livros-lista',
  templateUrl: './livros-lista.component.html',
  styleUrls: ['./livros-lista.component.css']
})
export class LivrosListaComponent {
  livros: Livro[] = []
  index!: number
  livroSelecionado = new Livro("", "");
  modalService = inject(NgbModal);

  constructor() {}
  abrirModal(template: any){
    this.livroSelecionado = new Livro("", "")
    this.modalService.open(template, { size: 'lg' });
  }


  addNaLista(livro: Livro){ 
    let modoNovo = true;
    if(livro.id > 0){
      modoNovo = false;
    }else{
      if(this.livros.length != 0){
        let novoID = this.livros[this.livros.length-1].id+1
        livro.id = novoID
      }else{
        livro.id = 1;  
      }
    }
    if(modoNovo){
      this.livros.push(livro);
    }else{
      this.livros[this.index] = livro
    }

    this.modalService.dismissAll();
  }
}
