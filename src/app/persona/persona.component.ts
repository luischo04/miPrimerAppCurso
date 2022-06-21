import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  nombre: string = 'Luis';
  apellido: string = 'Buenrostro';
  edad: number = 22;
  // private edad: number = 22;

  // getEdad(): number{
  //   return this.edad;
  // }
}
