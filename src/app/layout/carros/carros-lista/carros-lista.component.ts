import { Component } from '@angular/core';

@Component({
  selector: 'app-carros-lista',
  templateUrl: './carros-lista.component.html',
  styleUrls: ['./carros-lista.component.css']
})
export class CarrosListaComponent {

  carros = [
    { nome: 'Fusca', ano: 1970 },
    { nome: 'Civic', ano: 2022 },
    { nome: 'Gol', ano: 2005 },
  ];

}
