import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiServiceService {
  private apiUrl = 'https://pokeapi.co/api/v2/';
  constructor(private http: HttpClient) { }

  getpokemonList(): Observable<any>{
    return this.http.get(`${this.apiUrl}pokemon)`);
  }

  getpokemonDetails(id: number): Observable<any>{
    return this.http.get(`${this.apiUrl}pokemon/${id}`);
  }

}
