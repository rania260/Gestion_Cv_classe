import { Component } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrl: './ms-word.component.css'
})
export class MsWordComponent {
  background;
  color;
  taille;
  style;

  changeSize(newSize){
    let unite = prompt("Veuillez saisir l'unité");
    this.taille = `${newSize}${unite}`;

  }
}
