import { Component } from '@angular/core';
import { MappaReferenzeGasComponent } from '../mappa-referenze/mappa-referenze.component'
import { SeoService } from '../../services/seo.service'
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-panoramica',
  standalone: true,
  imports: [MappaReferenzeGasComponent, MatCardModule],
  templateUrl: './panoramica.component.html',
  styleUrl: './panoramica.component.css'
})
export class PanoramicaGasComponent {
  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.updateMeta('info-gas');
  }
}
