import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() recibeHijo?: string; //el interrogaciónes para que sepa que el mensage puede llegar a ser vacío.
  @Output() mensajeDesdeHijo = new EventEmitter<string>();
  mensaje: string = "";

  enviarMensaje(){
    this.mensajeDesdeHijo.emit(this.mensaje);
  }
}
