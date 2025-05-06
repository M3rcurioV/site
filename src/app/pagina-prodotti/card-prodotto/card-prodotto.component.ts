import { Component, Input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-card-prodotto',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card-prodotto.component.html',
  styleUrl: './card-prodotto.component.css',
  animations: [
    trigger('hoverEffect', [
      state('default', style({ transform: 'scale(1)', boxShadow: 'none' })),
      state('hovered', style({ transform: 'scale(1.05)', boxShadow: '0 8px 16px rgba(0,0,0,0.2)' })),
      transition('default <=> hovered', animate('200ms ease-in-out'))
    ])
  ]
})
export class CardProdottoComponent {

  @Input() titolo!: string;
  @Input() immagine!: string;
  @Input() descrizione!: string;
  hovered = false;
}
