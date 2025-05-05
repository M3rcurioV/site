import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
/*import { NgFor } from '@angular/common'; // Rimossa NgIf*/
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterLink, RouterLinkActive, RouterModule, MatMenuModule, MatIconModule],  /*NgFor*/
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  showProducts = false;

  prodotti: { name: string; route: string }[] = [
    { name: 'Gas', route: '/gas' },
    { name: 'Prodotto 1', route: '/prodotti/prodotto-1' },
    { name: 'Prodotto 2', route: '/prodotti/prodotto-2' },
    { name: 'Prodotto 3', route: '/prodotti/prodotto-3' }
  ];
}
