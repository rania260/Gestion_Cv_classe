import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrl: './item-component.component.css'
})
export class ItemComponentComponent {
  @Input() oneCandidat!: Candidat;
  @Output() candToListe = new EventEmitter<Candidat>();

  sendCandToListe() {
    this.candToListe.emit(this.oneCandidat);
  }
}
