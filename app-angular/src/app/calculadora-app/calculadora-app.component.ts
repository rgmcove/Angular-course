import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora-app',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora-app.component.html',
  styleUrl: './calculadora-app.component.css',
})
export class CalculadoraAppComponent {
  operA: number = 0;
  operB: number = 0;
  resultado: number = 0;

  sumar (): void {
    this.resultado = Number(this.operA) + Number(this.operB);
  }
}
