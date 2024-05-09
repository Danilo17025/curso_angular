import { Component, OnInit } from '@angular/core';
import { DirectivaNgForComponent } from './directiva-ng-for/directiva-ng-for.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true 
})
export class AppComponent implements OnInit {
  openAlert: boolean = false;
  title: any;

  constructor() {}

  ngOnInit(): void {}

  mostrara_en_consola(name: string) {
    console.log(name);
    this.openAlert = true;
  }
}
