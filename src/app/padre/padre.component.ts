import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  mensaje: string = "Así es la vaina";
  mensajeRecibido: string = "";
  valorContador: number = 0;
  nombre?: string;

  constructor(
    private _myService: MyServiceService
  ){}

  ngOnInit(){
    this._myService.setHermanoGrande("Juan");
    this.nombre = this._myService.getHermanoGrande();
  }

  recibirMensaje($event: string){
    this.mensajeRecibido = $event;
  }

  incrementar(){
    this.valorContador++;
  }

  decrementar(){
    this.valorContador--;
  }

  saludar(){
    this._myService.saludar(this._myService.getHermanoChico());
  }

  preguntar(){
    console.log(this._myService.preguntarPorHijo());
  }
}
