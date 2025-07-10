import { Component, Input } from '@angular/core';
import { TitreComponent } from '../titre/titre.component';

@Component({
  selector: 'app-parcours',
  imports: [TitreComponent],
  templateUrl: './parcours.component.html',
  styleUrl: './parcours.component.scss',
})
export class ParcoursComponent {
  @Input() titre: string = '';
}
