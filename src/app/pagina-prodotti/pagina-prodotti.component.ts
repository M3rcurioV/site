import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MatCardModule } from '@angular/material/card';

import { ProdottiService, Prodotto } from '../services/prodotti.service';
import { CardProdottoComponent } from './card-prodotto/card-prodotto.component';
//per animazione
/*import { trigger, style, animate, transition } from '@angular/animations';*/

@Component({
  selector: 'app-pagina-prodotti',
  standalone: true,
  imports: [CommonModule , RouterOutlet, CardProdottoComponent, MatCardModule],
  templateUrl: './pagina-prodotti.component.html',
  styleUrl: './pagina-prodotti.component.css',
  providers: [ProdottiService],
  encapsulation: ViewEncapsulation.Emulated,
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
