import { Injectable } from '@angular/core';
import { Personaje } from './models/personaje.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickapiService {

  private url = 'http://localhost:3000/characters';

  constructor(private httpClient: HttpClient) { }

  getCharacters() {
    return this.httpClient.get(this.url);
  }




}
