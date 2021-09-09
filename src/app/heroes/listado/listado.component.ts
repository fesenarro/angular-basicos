import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Iroman','Chespirito','Superman','Chapulin','PP'];
  heroeBorrado: string = '';

  borraHeroe(){
    console.log('borrando...');
    this.heroeBorrado = this.heroes.shift() || '';
  }
}



