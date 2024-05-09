import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivaNgForComponent } from './directiva-ng-for/directiva-ng-for.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: []
})
export class AppModule { }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule // Agrega CommonModule aquí
  ]
})
export class AppComponent implements OnInit {
  openAlert: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  mostrara_en_consola(name: string) {
    console.log(name);
    this.openAlert = true;
  }
}
