import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from "./nuevo-componente/nuevo-componente.component";
import { ComponenteInlineComponent } from "./componente-inline/componente-inline.component";
import { InterpolacionComponent } from "./interpolacion/interpolacion.component";
import { PadreComponent } from "./padre/padre.component";
import { EncapsulamientoComponent } from "./encapsulamiento/encapsulamiento.component";
import { MostrarMensajeComponent } from "./mostrar-mensaje/mostrar-mensaje.component";
import { ReplicadorComponent } from "./replicador/replicador.component";
import { SaludarComponent } from "./saludar/saludar.component";
import { ComponenteIfComponent } from "./componente-if/componente-if.component";
import { LocalReferenceComponent } from "./local-reference/local-reference.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NuevoComponenteComponent,
    ComponenteInlineComponent,
    InterpolacionComponent,
    PadreComponent,
    EncapsulamientoComponent,
    MostrarMensajeComponent, ReplicadorComponent, SaludarComponent, ComponenteIfComponent, LocalReferenceComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Local Reference en Angular';
}
