import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-liste-component',
  templateUrl: './liste-component.component.html',
  styleUrl: './liste-component.component.css'
})
export class ListeComponentComponent {
  tabCands: Candidat[] = [];

}
