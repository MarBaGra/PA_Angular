import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../common/iPokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons():Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>('assets/arbol-pokemons.json');
  }

}
