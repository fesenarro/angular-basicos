import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.Component.html'
})  
export class HeroeComponent{
    nombre: string = 'Iroman';
    edad: number = 45;
    sexo: string = 'M';

    get nombreCapitalizado(){
        return this.nombre.toLocaleUpperCase();
    }

    obtenerNombre():string{
        return `
            ${this.nombre} - ${this.edad}
        `;
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void{
        this.edad = 35;
    }
}