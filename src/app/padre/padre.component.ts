import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  numberCount: number = 0;
  mensajePadre = "Mensaje del padre";
  mensajeRecibido = "";

  incrementNumber() {
    this.numberCount++;
    this.mensajePadre = "Se incrementa el beta";
  }

  decrementNumber() {
    this.numberCount--;
    this.mensajePadre = "Se decrementa el beta";
  }

  recibirMensaje( $event: string ){
    this.mensajeRecibido = $event;
  }

}
