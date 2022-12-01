import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compartida/navbar/navbar.component';
import { EjemplosPipesComponent } from './componente/ejemplos-pipes/ejemplos-pipes.component';

@NgModule({
  //Declara todos los componentes 
  declarations: [
    AppComponent,
    NavbarComponent,
    EjemplosPipesComponent
  ],
  //todas las librrias que usamos
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
