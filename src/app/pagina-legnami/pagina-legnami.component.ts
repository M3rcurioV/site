import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service'
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pagina-legnami',
  imports: [MatCardModule],
  templateUrl: './pagina-legnami.component.html',
  styleUrl: './pagina-legnami.component.css'
})
export class PaginaLegnamiComponent implements OnInit {
  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.updateMeta('info-legno');
  }
}
