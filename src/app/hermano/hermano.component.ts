import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css']
})
export class HermanoComponent implements OnInit {

  nombre?: string;

  constructor(
    private _myService: MyServiceService
  ){}

  ngOnInit(): void {
    this._myService.setHermanoChico("Pedro");
    this.nombre = this._myService.getHermanoChico();
  }

  saludar(){
    this._myService.saludar(this._myService.getHermanoGrande());
  }

  preguntar(){
    console.log(this._myService.preguntarPorHijo());
  }

}
