import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes : string[] = [];
  heroesBorrados : string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.heroes = ["Spiderman", "Hulk", "Thor", "Capitan America", "Venom"];
    this.heroesBorrados = [];
  }

  borrarElemento(): void{
    if (this.heroes.length > 0){
      // EL ELEMENTO QUE SACO DE UN ARRAY LO INGRESO EN OTRO
      this.heroesBorrados.push(this.heroes.shift());
    }
  }

  reiniciar() :void{
    this.ngOnInit();
  }
  
}
