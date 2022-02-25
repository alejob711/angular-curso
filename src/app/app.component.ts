import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo : string = 'Contador App';
  resultado : number = 10;
  base   : number = 5;

  acumular = (valor:number) => this.resultado += valor;

}