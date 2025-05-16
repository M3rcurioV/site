import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MatCardModule } from '@angular/material/card';

import { ProdottiService, Prodotto } from '../services/prodotti.service';
import { CardProdottoComponent } from './card-prodotto/card-prodotto.component';
import { SeoService } from '../services/seo.service'
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
})
export class PaginaProdottiComponent implements OnInit {


  gruppoA: Prodotto[] = [];
  gruppoB: Prodotto[] = [];

  constructor(
    private prodottiService: ProdottiService,
    private seo: SeoService
  ) { }

  ngOnInit(): void {
    this.seo.updateMeta('prodotti');

    this.prodottiService.getProdotti().subscribe((prodotti) => {
      this.gruppoA = prodotti.filter(p => p.gruppo === 'gruppoA');
      this.gruppoB = prodotti.filter(p => p.gruppo === 'gruppoB');
    });
  }
}
