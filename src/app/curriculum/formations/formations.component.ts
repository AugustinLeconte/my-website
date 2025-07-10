import { Component } from '@angular/core';
import { ParcoursComponent } from '../parcours/parcours.component';
import { TitreComponent } from '../titre/titre.component';

@Component({
  selector: 'app-formations',
  imports: [ParcoursComponent, TitreComponent],
  templateUrl: './formations.component.html',
  styleUrl: './formations.component.scss',
})
export class FormationsComponent {}
