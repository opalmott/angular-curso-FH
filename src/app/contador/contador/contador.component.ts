import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{title}}</h1>

    <h2>La base es: <strong> {{base}} </strong></h2>
    
    <button (click)="calcular(-base)"> - {{base}} </button>
    <span> {{ numero }} </span>
    <button (click)="calcular(+base)"> + {{base}} </button>
  `
})
export class ContadorComponent {
  title: string = 'Contador App';
  numero: number = 10;
  base: number = 7;

  calcular(valor: number){
    // this.numero = this.numero + (valor*this.base);
    this.numero = this.numero + valor;
  }


}