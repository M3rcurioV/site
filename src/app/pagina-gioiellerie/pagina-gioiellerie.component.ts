import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service'
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pagina-gioiellerie',
  imports: [MatCardModule],
  templateUrl: './pagina-gioiellerie.component.html',
  styleUrl: './pagina-gioiellerie.component.css'
})
export class PaginaGioiellerieComponent implements OnInit {
  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.updateMeta('giano');
  }
}
