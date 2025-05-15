import { Component, Input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

import { trigger, state, style, transition, animate } from '@angular/animations';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-card-prodotto',
  standalone: true,
  imports: [MatCardModule, RouterLink],
  templateUrl: './card-prodotto.component.html',
  styleUrl: './card-prodotto.component.css',
  animations: [
    trigger('hoverEffect', [
      state('default', style({ transform: 'scale(1)', boxShadow: 'none' })),
      state('hovered', style({ transform: 'scale(1.05)', boxShadow: '0 8px 16px rgba(0,0,0,0.2)' })),
      transition('default <=> hovered', animate('200ms ease-in-out'))
    ]),
  //  //trigger('textSlide', [
  //  //  state('initial', style({ transform: 'translateX(100%)', opacity: 0 })),
  //  //  state('hovered', style({ transform: 'translateX(0)', opacity: 1 })),
  //  //  transition('initial <=> hovered', animate('300ms ease-in-out'))
  //  //])
  //  trigger('textFade', [
  //    state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })),
  //    state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
  //    transition('hidden <=> visible', animate('300ms ease-in-out'))
  //  ])
  ]
})
export class CardProdottoComponent {


  @Input() titolo!: string;
  @Input() immagine!: string;
  @Input() descrizione!: string;
  @Input() routing!: string;
  hovered = false;


}
