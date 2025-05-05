import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SottoMenuComponent, SottoMenuItem } from '../sotto-menu/sotto-menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pagina-gas',
  standalone: true,
  imports: [CommonModule, SottoMenuComponent, RouterOutlet],
  templateUrl: './pagina-gas.component.html',
  styleUrl: './pagina-gas.component.css'
})
export class PaginaGasComponent {
  gasMenuItems: SottoMenuItem[] = [ 
    { label: 'Panoramica', route: '/gas/panoramica' },
    { label: 'Caratteristiche', route: '/gas/caratteristiche' },
    { label: 'Specifiche', route: '/gas/specifiche' },
    { label: 'Applicazioni', route: '/gas/applicazioni' },
    { label: 'Mappa Referenze', route: '/gas/mappa-referenze' },
    // altri elementi del sottomenu
  ];
}
