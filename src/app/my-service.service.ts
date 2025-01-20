import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  hermanoGrande?: string;
  hermanoChico?: string;

  constructor() { }

  getHermanoGrande(){
    return this.hermanoGrande || '';
  }

  setHermanoGrande(nombre: string){
    this.hermanoGrande = nombre;
  }

  getHermanoChico(){
    return this.hermanoChico || '';
  }

  setHermanoChico(nombre: string){
    this.hermanoChico = nombre;
  }

  saludar(hermano: string){
    console.log(`Hola ${hermano}`);
  }

  preguntarPorHijo(){
    return "¿Cómo está tu hijo?";
  }

}
