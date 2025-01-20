import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() mensajeDesdePadre?: string;
  @Output() mansajeDesdeHijo = new EventEmitter<string>();
  @Output() incrementar = new EventEmitter<void>();
  @Output() decrementar = new EventEmitter<void>();

  mensaje: string = '';

  sendMessage() {
    this.mansajeDesdeHijo.emit(this.mensaje);
  }

  sendIncrementar() {
    this.incrementar.emit();
  }

  sendDecrementar() {
    this.decrementar.emit();
  }

}
