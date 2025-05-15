import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model'; 
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root' //lo rende disponibile a tutta l'app
})
export class ClienteService {
  private apiUrl = environment.apiUrl + '/api/clienti'; //  l'URL dell'API

  constructor(private http: HttpClient) { }

  getClienti(): Observable<Cliente[]> {
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });

    return this.http.get<Cliente[]>(this.apiUrl, { headers });
  }
}
