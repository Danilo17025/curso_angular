import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component'; // Ajusta la ruta si es necesario
import { DirectivaNgForComponent } from '../directiva-ng-for/directiva-ng-for.component'; // Ajusta la ruta si es necesario

@NgModule({
  declarations: [
    AppComponent,
    DirectivaNgForComponent // Declara el componente aquí
  ],
  imports: [
    BrowserModule,
    CommonModule // Importa CommonModule si lo necesitas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
