import { Component, Input } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrl: './detail-component.component.css'
})

export class DetailComponentComponent {
  @Input() selCand!: Candidat;


}
