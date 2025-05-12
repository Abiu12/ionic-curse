import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  text: string = "Primero"
  constructor() {}
  cambarTexto() {
    this.text = "Segundo"
  }
}
