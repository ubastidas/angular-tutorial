import { Component } from '@angular/core';
import { MyServiceService } from "./my-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Aplicación de desarrollo';
  subtitle = 'Es lo primero que escribimnos';

  constructor(private _myservice: MyServiceService){

  }
}
