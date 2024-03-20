import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-liste-component',
  templateUrl: './liste-component.component.html',
  styleUrl: './liste-component.component.css'
})
export class ListeComponentComponent {
  
  @Input() tabCands: Candidat[] = [];
  @Output() candToCv = new EventEmitter();

  sendCandToCv(cand: Candidat) {
    this.candToCv.emit(cand);
  }

}
