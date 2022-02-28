import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre:string;
  poder:number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  personajes : Personaje[] = [];

  personaje : Personaje = {
    nombre:"",
    poder:0
  }

  constructor() { }

  ngOnInit(): void {
  }

  agregarElemento(){
    if (this.personaje.nombre.trim().length === 0){ return; }
    this.personajes.push(this.personaje);
    this.personaje = {
      nombre:"",
      poder:0
    }
  }
}
