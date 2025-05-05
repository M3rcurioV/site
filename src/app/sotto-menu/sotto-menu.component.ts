import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

export interface SottoMenuItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-sotto-menu',
  imports: [CommonModule, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatRippleModule],
  templateUrl: './sotto-menu.component.html',
  styleUrl: './sotto-menu.component.css'
})
export class SottoMenuComponent {
  @Input() menuItems: SottoMenuItem[] = []; // Riceve l'array di elementi come input
}
