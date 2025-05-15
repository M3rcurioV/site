import { Component, OnInit } from '@angular/core';
//import * as L from 'leaflet';
//import 'leaflet.markercluster'; // Modulo per i marker cluster
import * as L from 'leaflet'; // Importa il namespace completo (potrebbe includere riferimenti agli assets)
import { default as DefL } from 'leaflet'; // Importa l'export default per accedere a markerClusterGroup
/*import 'leaflet.markercluster';*/  //Non serve più, non stiamo raggruppando più

import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mappa-referenze',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mappa-referenze.component.html',
  styleUrls: [
    './mappa-referenze.component.css'
  ]
})
export class MappaReferenzeGasComponent implements OnInit {
  private map!: L.Map;
  clienti: Cliente[] = []; // Array per i clienti caricati dal servizio

  //private clienti = [
  //  { nome: 'Messina', latitudine: 38.230833, longitudine: 15.506667 },
  //  { nome: 'Palermo', latitudine: 38.1151, longitudine: 13.3508 },
  //  { nome: 'Agrigento', latitudine: 37.3219, longitudine: 13.5896 },
  //  { nome: 'Catania', latitudine: 37.5023612, longitudine: 15.0873718 },

  //  { nome: 'Catania2', latitudine: 37.50361545190985, longitudine: 15.079808757618252 },
  //];

  private Azienda = { 
    nome: 'La Nostra Azienda',
    latitudine: 37.5583485,
    longitudine: 15.0609761
  };

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'assets/images/leaflet/marker-icon-2x.png',
      iconUrl: 'assets/images/leaflet/marker-icon.png',
      shadowUrl: 'assets/images/leaflet/marker-shadow.png'
    });
    this.initMap();
    /*    this.loadClienti();*/
    this.loadClienti();
    this.AggiungiMarkerAzienda();
  }



  private initMap(): void {
    this.map = L.map('map', {
      center: [39.2077255, 14.0900667],
      zoom: 6, //zoom necessario
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

  }

  private loadClienti(): void {
    this.clienteService.getClienti().subscribe(clientiDalServer => {
      this.clienti = clientiDalServer;
      this.aggiungiMarkerClienti();
    });
  }
  private aggiungiMarkerClienti(): void {
    this.clienti.forEach(cliente => {
      const marker = L.marker([cliente.Latitudine, cliente.Longitudine]);
      marker.bindPopup(`<b>${cliente.Nome}</b>`);
      marker.addTo(this.map);
    });
  }

  //private loadClienti(): void {
  //  this.clienteService.getClienti().subscribe(clientiDalServer => {
  //    this.clienti = clientiDalServer;
  //    const customerMarkers = this.creaMarkerClienti();
  //    if (customerMarkers && this.map) {
  //      this.map.addLayer(customerMarkers);
  //    }
  //  });
  //}

  //private creaMarkerClienti(): L.LayerGroup | undefined {
  //  if (!this.map || this.clienti.length === 0) {
  //    return undefined;
  //  }

  //  const markers = DefL.markerClusterGroup();
 
  //  this.clienti.forEach(cliente => {
  //    const marker = L.marker([cliente.Latitudine, cliente.Longitudine]);
  //    marker.bindPopup(`<b>${cliente.Nome}</b>`); 
  //    markers.addLayer(marker);
  //  });
  //  return markers;
  //}

  private AggiungiMarkerAzienda(): void {

    const logoUrl = 'assets/images/logoAziendaMappa.jpg'; 

    const aziendaIcon = L.icon({
      iconUrl: logoUrl,
      iconSize: [40, 30],       // Dimensioni del logo come marker
      iconAnchor: [15, 30],     // Centro in basso del marker (punta alla posizione)
      popupAnchor: [0, -30]    // Popup rispetto al marker
    });
    const marker = L.marker([this.Azienda.latitudine, this.Azienda.longitudine], { icon: aziendaIcon });
    marker.bindPopup(`<b>${this.Azienda.nome}</b>`);
    marker.addTo(this.map);
  }
}
