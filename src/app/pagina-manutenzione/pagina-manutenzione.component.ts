import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service'
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pagina-manutenzione',
  imports: [MatCardModule],
  templateUrl: './pagina-manutenzione.component.html',
  styleUrl: './pagina-manutenzione.component.css'
})
export class PaginaManutenzioneComponent implements OnInit {
  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.updateMeta('info-manutengo');
  }
}
