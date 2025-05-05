import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SottoMenuComponent, SottoMenuItem } from '../sotto-menu/sotto-menu.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-pagina-prodotti',
  standalone: true,
  imports: [CommonModule, SottoMenuComponent, RouterOutlet],
  templateUrl: './pagina-prodotti.component.html',
  styleUrl: './pagina-prodotti.component.css'
})
export class PaginaProdottiComponent {
  prodottiMenuItems: SottoMenuItem[] = [
    {
      label: 'Gas', route: '/gas'
    },
    {
      label: 'Abbigliamento', route: '/abbigliamento'
    },
    {
      label: 'Magazzino', route: '/magazzino'
    },
    {
      label: 'Gioielleria', route: '/gioielleria'
    },
    {
      label: 'Legnami', route: '/magazzino'
    },
    {
      label: 'Surgelati', route: '/magazzino'
    },
    {
      label: 'Ottica', route: '/magazzino'
    },
    {
      label: 'Palestre', route: '/magazzino'
    },
    {
      label: 'Rilevazione Presenze', route: '/magazzino'
    },
    {
      label: 'Agenti Commercio', route: '/magazzino'
    },
    // altri elementi del sottomenu
  ];
}
