import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


export interface PokemonDetailResult {
  abilities: { ability: { name: string, url: string } }[]
}

export interface PokemonApiResult {
  count: number,
  next?: string,
  previous?: string,
  results: { name: string, url: string } []
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) {

  }

  pokemonApi(): Observable<PokemonApiResult> {
    return this.httpClient.get<PokemonApiResult>("https://pokeapi.co/api/v2/pokemon")
  }

  pokemonDetails(name: string): Observable<PokemonDetailResult> {
    return this.httpClient.get<PokemonDetailResult>("https://pokeapi.co/api/v2/pokemon/" + name)
  }
}
