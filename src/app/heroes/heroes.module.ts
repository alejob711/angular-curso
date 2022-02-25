import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Heroe } from "./heroe/heroe.component";
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations:[
        Heroe,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]
})
export class HeroesModule{}