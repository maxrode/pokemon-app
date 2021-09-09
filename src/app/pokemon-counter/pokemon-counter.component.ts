import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-counter',
  templateUrl: './pokemon-counter.component.html',
  styleUrls: ['./pokemon-counter.component.css']
})
export class PokemonCounterComponent implements OnInit {

  pokemonCount : number = 0;

  constructor(private pokemonService : PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.pokemonApi().subscribe(data => this.pokemonCount = data.count)
  }

}
