import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent{
    deshabilitar = false;
    mensaje = '';
    titulo = 'Ingeniero';
    mostrar = false;
    
    agregarPersona(){
        this.mostrar = true;
        this.mensaje = 'Persona agregada';
    }

    // Variable tipo Event
    /**
     * 
     * @param event -> nos permite acceder a nuestro input
     *  HTMLInputElement -> declara que es un input de html
     */
    // modificarTitulo(event: Event){
    //     console.log('Entrando a metodo modificar titulo')
    //     this.titulo = (<HTMLInputElement>event.target).value
    // }

}