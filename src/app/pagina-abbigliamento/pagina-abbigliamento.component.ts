import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service'
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pagina-abbigliamento',
  imports: [MatCardModule],
  templateUrl: './pagina-abbigliamento.component.html',
  styleUrl: './pagina-abbigliamento.component.css'
})
export class PaginaAbbigliamentoComponent implements OnInit {
  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.updateMeta('taglie-e-colori');
  }
}
