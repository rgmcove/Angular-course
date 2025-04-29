import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css',
})
export class CalculadoraComponent {
  operA: number = 0;
  operB: number = 0;
  resultado: number = 0;

  sumar(): void {
    this.resultado = Number(this.operA) + Number(this.operB);
  }
}
