import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-panoramica',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './panoramica.component.html',
  styleUrl: './panoramica.component.css'
})
export class PanoramicaGasComponent {
  immaginePrincipaleSoftware = 'assets/images/software-gestionale-gas.png';
  descrizioneBreveSoftware = 'Il nostro software gestionale è progettato specificamente per le aziende del settore gas, offrendo strumenti avanzati per ottimizzare operazioni, gestire risorse e migliorare l\'efficienza.';
  funzionalitaSalienti = [
    { nome: 'Gestione Clienti', link: '/gas/funzionalita#clienti' },
    { nome: 'Pianificazione Interventi', link: '/gas/funzionalita#interventi' },
    { nome: 'Fatturazione Elettronica', link: '/gas/funzionalita#fatturazione' },
    { nome: 'Monitoraggio Magazzino', link: '/gas/funzionalita#magazzino' }
  ];
}
