import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './pagina-home.component.html',
  styleUrl: './pagina-home.component.css',
})
export class PaginaHomeComponent {
  services = [
    {
      title: 'Distribuzione Software',
      subtitle: 'Installazione e fornitura di soluzioni gestionali.',
      description: 'Configurazione su misura e supporto dedicato per ogni ambiente operativo.',
      image: 'assets/images/serviceDistribuzione.jpg',
    },
    {
      title: 'Software Personalizzati',
      subtitle: 'Soluzioni software su misura.',
      description: 'Analisi, progettazione e sviluppo su specifica del cliente.',
      image: 'assets/images/serviceSoftware.jpg',
    },
    {
      title: 'Assistenza Sistemistica',
      subtitle: 'Supporto tecnico per i nostri software.',
      description: 'Interventi tempestivi e aggiornamenti su software da noi installati.',
      image: 'assets/images/serviceAssistenza.jpg',
    },
  ];
}
