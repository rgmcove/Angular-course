import { Component } from '@angular/core';

@Component({
  selector: 'app-encapsulamiento',
  standalone: true,
  imports: [],
  templateUrl: './encapsulamiento.component.html',
  styleUrl: './encapsulamiento.component.css',
})
export class EncapsulamientoComponent {
  private titulo = 'Titulo Componente Encapsulamiento';

  // Getter Encapsulamiento TypeScript
  get mostrarTitulo() {
    return this.titulo;
  }

  // Metodo normal encapsulamiento JavaScript
  getTitulo() {
    return this.titulo;
  }
}
