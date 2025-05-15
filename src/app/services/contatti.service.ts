import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Contatto } from '../models/contatto.model';

@Injectable({
  providedIn: 'root'
})
export class ContattiService {
  private apiUrl = environment.apiUrl + '/api/contatti';
  constructor(private http: HttpClient) { }

  inviaMessaggio(contatto: Contatto): Observable<void> {
    return this.http.post<void>(this.apiUrl, contatto);
  }
}
