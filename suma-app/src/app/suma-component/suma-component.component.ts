import { Component } from '@angular/core';

@Component({
  selector: 'suma-component',
  templateUrl: './suma-component.component.html',
  styleUrls: ['./suma-component.component.css']
})
export class SumaComponentComponent {

  titulo: string = 'Aplicación de Calculadora';
  operandoA: number = 0;
  operandoB: number = 0;
  resultado: number = 0;

  sumar(): void {
      this.resultado = this.operandoA + this.operandoB;
  }

}
