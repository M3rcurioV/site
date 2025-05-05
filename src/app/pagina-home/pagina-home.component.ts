import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-pagina-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './pagina-home.component.html',
  styleUrl: './pagina-home.component.css',
  animations: [
    trigger('cardElevationGas', [
      state('initial', style({
        'box-shadow': '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)'
      })),
      state('hovered', style({
        'box-shadow': '0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)'
      })),
      transition('initial => hovered', animate('200ms ease-in-out')),
      transition('hovered => initial', animate('200ms ease-in-out'))
    ]),
    trigger('cardElevationLegacy', [
      state('initial', style({
        'box-shadow': '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)'
      })),
      state('hovered', style({
        'box-shadow': '0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)'
      })),
      transition('initial => hovered', animate('200ms ease-in-out')),
      transition('hovered => initial', animate('200ms ease-in-out'))
    ])
  ]
})
export class PaginaHomeComponent {
  elevationGas: string = 'initial';
  elevationLegacy: string = 'initial';
  descrizioneBreveSoftwareGas = "Il software gestionale progettato specificamente per la tua azienda del settore gas"
  descrizioneBreveSoftwareLegacy = "Breve descrizione dei nostri software legacy..."
}
