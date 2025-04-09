import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  standalone: true,
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent {
  titulo = 'Universidad Angular';
  usuario = {
    nombre: 'Ruben Gomez',
    edad: 33
  };

  saludar() {
    return `Hola, ${this.usuario.nombre}`;
  }

}
