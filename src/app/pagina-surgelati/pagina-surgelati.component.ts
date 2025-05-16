import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service'
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pagina-surgelati',
  imports: [MatCardModule],
  templateUrl: './pagina-surgelati.component.html',
  styleUrl: './pagina-surgelati.component.css'
})
export class PaginaSurgelatiComponent implements OnInit {
  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.updateMeta('info-surgelati');
  }

}
