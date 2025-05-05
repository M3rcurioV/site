import { Routes } from '@angular/router';
import { PaginaHomeComponent } from './pagina-home/pagina-home.component';
import { PaginaChiSiamoComponent } from './pagina-chi-siamo/pagina-chi-siamo.component';
import { PaginaContattiComponent } from './pagina-contatti/pagina-contatti.component';
import { PaginaProdottiComponent } from './pagina-prodotti/pagina-prodotti.component';
import { PaginaGasComponent } from './pagina-gas/pagina-gas.component';
import { PanoramicaGasComponent } from './pagina-gas/panoramica/panoramica.component';
import { CaratteristicheGasComponent } from './pagina-gas/caratteristiche/caratteristiche.component';
import { SpecificheGasComponent } from './pagina-gas/specifiche/specifiche.component';
import { ApplicazioniGasComponent } from './pagina-gas/applicazioni/applicazioni.component';
import { MappaReferenzeGasComponent } from './pagina-gas/mappa-referenze/mappa-referenze.component';

export const routes: Routes = [
  { path: 'Home', component: PaginaHomeComponent },
  { path: 'chi-siamo', component: PaginaChiSiamoComponent },
  { path: 'contatti', component: PaginaContattiComponent },
  { path: 'prodotti', component: PaginaProdottiComponent },
  {
    path: 'gas',
    component: PaginaGasComponent,
    children: [
      { path: 'panoramica', component: PanoramicaGasComponent },
      { path: 'caratteristiche', component: CaratteristicheGasComponent },
      { path: 'specifiche', component: SpecificheGasComponent },
      { path: 'applicazioni', component: ApplicazioniGasComponent },
      { path: 'mappa-referenze', component: MappaReferenzeGasComponent },
      { path: '', redirectTo: 'panoramica', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }, // Reindirizza la radice a '/Home'
  { path: '**', redirectTo: '/Home' }, // Rotta di fallback
];
