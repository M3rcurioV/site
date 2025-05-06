import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Prodotto {
  titolo: string;
  immagine: string;
  descrizione: string;
  gruppo: 'gruppoA' | 'gruppoB';
}

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {
  private url = 'assets/data/prodotti.json';

  constructor(private http: HttpClient) { }

  getProdotti(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(this.url);
  }

}
