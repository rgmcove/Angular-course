import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent{

    deshabilitar = false;
    mensaje = 'No se ha agregado ninguna persona';
    titulo = '';
    titulo2 = 'Ingeniero';

    agregarPersona() {
        this.mensaje = 'Persona agregada';
    }

    //Metodo con captura de evento (Event Binding)
    modificarTitulo(event: Event) {
        console.log('Entrando a metodo modificar titulo')
        this.titulo = (<HTMLInputElement>event.target).value;
    } 

}