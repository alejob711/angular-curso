import { Component } from '@angular/core';

@Component({
    selector: 'app-acumulador',
    template: `
        <h1>{{titulo}}</h1>
        <h2>La base es: {{base}}</h2>

        <button (click)="acumular(base)"> + {{base}} </button>

        <span>{{resultado}}</span>

        <button (click)="acumular(-base)"> - {{base}} </button>
        `,
  })

export class Acumulador {
    titulo : string = 'Contador App';
    resultado : number = 10;
    base   : number = 5;

    acumular = (valor:number) => this.resultado += valor;

}