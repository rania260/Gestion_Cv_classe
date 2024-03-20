import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv-component',
  templateUrl: './cv-component.component.html',
  styleUrl: './cv-component.component.css'
})
export class CvComponentComponent {
  
  tabCandidats: Candidat[] = [
    new Candidat(1, 'Bart', 'Simpson', 23, 'ingénieur', 's1.jpeg'),
    new Candidat(2, 'Homer', 'Simpson', 55, 'directeur', 's2.jpeg'),
    new Candidat(3, 'Lisa', 'Simpson', 30, 'designer', 's3.png'),
  ];
  selectedCandidat!: Candidat;

  
  recupererCand(cand: Candidat) {
    this.selectedCandidat = cand;
  }
}
