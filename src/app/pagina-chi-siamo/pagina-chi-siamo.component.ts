import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service'
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pagina-chi-siamo',
  imports: [MatCardModule],
  templateUrl: './pagina-chi-siamo.component.html',
  styleUrl: './pagina-chi-siamo.component.css'
})
export class PaginaChiSiamoComponent implements OnInit {
  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.updateMeta('chi-siamo');
  }
}
