import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titre',
  imports: [],
  templateUrl: './titre.component.html',
  styleUrl: './titre.component.scss',
})
export class TitreComponent {
  @Input() titre: string = '';
}
