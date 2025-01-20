import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';
import { HermanoComponent } from './hermano/hermano.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { EstiloHermanosDirective } from './estilo-hermanos.directive';
import { MyPipePipe } from './my-pipe.pipe';
import { MyPipePersonalizadoPipe } from './my-pipe-personalizado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    HermanoComponent,
    MyDirectiveDirective,
    EstiloHermanosDirective,
    MyPipePipe,
    MyPipePersonalizadoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
