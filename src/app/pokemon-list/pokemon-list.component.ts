import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: { name: string, url: string }[] = []

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemonService.pokemonApi().subscribe(data => {
      this.pokemons = data.results;
    });
  }

}
