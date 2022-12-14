import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickapiService {

  private url = 'https://rickandmortyapi.com/api/character/1,2,3,4,5,6';

  constructor(private httpClient: HttpClient) { }

  getCharacters() {
    return this.httpClient.get(this.url);
  }




}
