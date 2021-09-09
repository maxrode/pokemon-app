import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface PokemonApiResult {
  count : number
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient : HttpClient) { 

  }

  pokemonApi() : Observable<PokemonApiResult>{
    return this.httpClient.get<PokemonApiResult>("https://pokeapi.co/api/v2/pokemon")
  }
}
