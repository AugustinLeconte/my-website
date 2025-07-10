import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() collapsed = false;
  @Output() toggle = new EventEmitter<void>();
  faHome = faHome;
  faUser = faUser;

  toggleNavbar() {
    this.toggle.emit();
  }
}
