import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Carro } from '../carro';

@Component({
  selector: 'app-carros-details',
  templateUrl: './carros-details.component.html',
  styleUrls: ['./carros-details.component.css']
})
export class CarrosDetailsComponent {
  @Input() carro: Carro = new Carro("");

  @Output() retorno = new EventEmitter<Carro>();
  constructor(){

  }
  salvar(){
    this.retorno.emit(this.carro);
  }

  ngOnInit(): void {
      this.carro = Object.assign({},this.carro);
  }

}
