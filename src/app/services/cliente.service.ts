import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model'; 
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root' //lo rende disponibile a tutta l'app
})
export class ClienteService {
  private apiUrl = environment.apiUrl + '/api/clienti'; //  l'URL dell'API

  constructor(private http: HttpClient) { }

  getClienti(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }
}
