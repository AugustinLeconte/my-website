import { Component } from '@angular/core';
import { ParcoursComponent } from '../parcours/parcours.component';

@Component({
  selector: 'app-formations',
  imports: [ParcoursComponent],
  templateUrl: './formations.component.html',
  styleUrl: './formations.component.scss',
})
export class FormationsComponent {}
