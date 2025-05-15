import { Routes } from '@angular/router';
import { PaginaHomeComponent } from './pagina-home/pagina-home.component';
import { PaginaChiSiamoComponent } from './pagina-chi-siamo/pagina-chi-siamo.component';
import { PaginaContattiComponent } from './pagina-contatti/pagina-contatti.component';
import { PaginaProdottiComponent } from './pagina-prodotti/pagina-prodotti.component';
//
//Gruppo A
//
//gas
import { PaginaGasComponent } from './pagina-gas/pagina-gas.component';
import { PanoramicaGasComponent } from './pagina-gas/panoramica/panoramica.component';
import { MappaReferenzeGasComponent } from './pagina-gas/mappa-referenze/mappa-referenze.component';
//manutenzione
import { PaginaManutenzioneComponent } from './pagina-manutenzione/pagina-manutenzione.component';
//rilevPresenze
import { PaginaRilevpresenzeComponent } from './pagina-rilevpresenze/pagina-rilevpresenze.component';
//
//gruppoB
//
//abbigliamento
import { PaginaAbbigliamentoComponent } from './pagina-abbigliamento/pagina-abbigliamento.component';
//Gioeiellerie
import { PaginaGioiellerieComponent } from './pagina-gioiellerie/pagina-gioiellerie.component';
//Legnami
import { PaginaLegnamiComponent } from './pagina-legnami/pagina-legnami.component';
//Surgelati
import { PaginaSurgelatiComponent } from './pagina-surgelati/pagina-surgelati.component';


export const routes: Routes = [
  { path: 'Home', component: PaginaHomeComponent , data: { animation: 'HomePage' } },
  { path: 'chi-siamo', component: PaginaChiSiamoComponent },
  { path: 'contatti', component: PaginaContattiComponent },
  { path: 'prodotti', component: PaginaProdottiComponent },
  {
    path: 'gas',
    component: PaginaGasComponent,
    data: { animation: 'GasPage' },
    children: [
      { path: 'panoramica', component: PanoramicaGasComponent },
      { path: 'mappa-referenze', component: MappaReferenzeGasComponent },
      { path: '', redirectTo: 'panoramica', pathMatch: 'full' },
    ],
  },
  {
    path: 'manutenzione',
    component: PaginaManutenzioneComponent,
    data: { animation: 'manutenzionePage' },
    children: [],
  },
  {
    path: 'rilevazione-presenze',
    component: PaginaRilevpresenzeComponent,
    data: { animation: 'rilevPresenzePage' },
    children: [],
  },
  {
    path: 'abbigliamento',
    component: PaginaAbbigliamentoComponent,
    data: { animation: 'abbigliamentoPage' },
    children: [],
  },
  {
    path: 'gioiellerie',
    component: PaginaGioiellerieComponent,
    data: { animation: 'gioielleriePage' },
    children: [],
  },
  {
    path: 'legnami',
    component: PaginaLegnamiComponent,
    data: { animation: 'legnamiPage' },
    children: [],
  },
  {
    path: 'surgelati',
    component: PaginaSurgelatiComponent,
    data: { animation: 'surgelatiPage' },
    children: [],
  },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }, // Reindirizza la radice a '/Home'
  { path: '**', redirectTo: '/Home' }, // Rotta di fallback
];
