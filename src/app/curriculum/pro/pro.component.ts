import { Component } from '@angular/core';
import { ParcoursComponent } from '../parcours/parcours.component';
import { TitreComponent } from '../titre/titre.component';

@Component({
  selector: 'app-pro',
  imports: [ParcoursComponent, TitreComponent],
  templateUrl: './pro.component.html',
  styleUrl: './pro.component.scss',
})
export class ProComponent {}
