import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service'
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pagina-rilevpresenze',
  imports: [MatCardModule],
  templateUrl: './pagina-rilevpresenze.component.html',
  styleUrl: './pagina-rilevpresenze.component.css'
})
export class PaginaRilevpresenzeComponent implements OnInit {
  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.updateMeta('presenze2000');
  }

}
