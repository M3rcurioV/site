import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
/*import { SottoMenuComponent, SottoMenuItem } from '../sotto-menu/sotto-menu.component';*/

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pagina-gas',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './pagina-gas.component.html',
  styleUrl: './pagina-gas.component.css'
})
export class PaginaGasComponent {
  //gasMenuItems: SottoMenuItem[] = [ 
  //  { label: 'Panoramica', route: '/gas/panoramica' },
  //  { label: 'Le nostre installazioni', route: '/gas/mappa-referenze' },
  //];
}
