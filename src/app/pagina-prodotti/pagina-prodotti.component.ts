import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SottoMenuComponent, SottoMenuItem } from '../sotto-menu/sotto-menu.component';
import { RouterOutlet } from '@angular/router';

import { ProdottiService, Prodotto } from '../services/prodotti.service';
import { CardProdottoComponent } from './card-prodotto/card-prodotto.component';
//per animazione
/*import { trigger, style, animate, transition } from '@angular/animations';*/

@Component({
  selector: 'app-pagina-prodotti',
  standalone: true,
  imports: [CommonModule, SottoMenuComponent, RouterOutlet, CardProdottoComponent],
  templateUrl: './pagina-prodotti.component.html',
  styleUrl: './pagina-prodotti.component.css',
  providers: [ProdottiService],
  //animations: [
  //  trigger('slideInLeft', [
  //    transition(':enter', [
  //      style({ transform: 'translateX(-100%)', opacity: 0 }),
  //      animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
  //    ])
  //  ]),
  //  trigger('slideInRight', [
  //    transition(':enter', [
  //      style({ transform: 'translateX(100%)', opacity: 0 }),
  //      animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
  //    ])
  //  ])
  //]
})
export class PaginaProdottiComponent implements OnInit {
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
      label: 'Legnami', route: '/magazzino'
    },
    {
      label: 'Surgelati', route: '/magazzino'
    },
    {
      label: 'Ottica', route: '/magazzino'
    },
    {
      label: 'Rilevazione Presenze', route: '/magazzino'
    },
    {
      label: 'Agenti Commercio', route: '/magazzino'
    },
    // altri elementi del sottomenu
  ];
  gruppoA: Prodotto[] = [];
  gruppoB: Prodotto[] = [];

  constructor(private prodottiService: ProdottiService) { }

  ngOnInit(): void {
    this.prodottiService.getProdotti().subscribe((prodotti) => {
      this.gruppoA = prodotti.filter(p => p.gruppo === 'gruppoA');
      this.gruppoB = prodotti.filter(p => p.gruppo === 'gruppoB');
    });
  }
}
