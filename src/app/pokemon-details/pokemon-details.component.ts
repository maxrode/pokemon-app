import {Component, Input, OnInit} from '@angular/core';
import {PokemonDetailResult, PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  @Input()
  name: string = ""

  @Input()
  url: string = ""

  details: PokemonDetailResult = {abilities: []}

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemonService.pokemonDetails(this.name).subscribe(data => {
      this.details = data
    })
  }

}
