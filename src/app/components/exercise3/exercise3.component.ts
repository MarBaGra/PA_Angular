import { Component, signal } from '@angular/core';
import { Pokemon } from '../../common/iPokemon';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonCategoriesComponent } from "../pokemon-categories/pokemon-categories.component";

@Component({
  selector: 'app-exercise3',
  standalone: true,
  imports: [PokemonCategoriesComponent],
  templateUrl: './exercise3.component.html',
  styleUrl: './exercise3.component.scss'
})
export class Exercise3Component {

  apiPokemon: Pokemon[] = [];
  pokemon!: Pokemon;
  category = signal <string[]>([])
  show: boolean = true;
  evolution!: string;

  constructor(private dataService: PokemonService) {
  }

  ngOnInit(): void {
    this.chargePokemons();
  }

  private chargePokemons() {
    this.dataService.getPokemons().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.apiPokemon = data;
        },
        error: err => {
          console.log(err);
        },
        complete: () => {
          console.log('Complete!!!');
        }
      }
    )
  }

  searchPokemos(pokemon: Pokemon){
    
    this.show = true;
    this.category.set([])
    this.pokemon = pokemon;

    this.apiPokemon.forEach(pokemon => {
      if (pokemon.category_id !== null && pokemon.category_id[0] === this.pokemon.id && pokemon.parent === null) {
        this.category.update(categories => [...categories, pokemon.photo]);
      }
    });

  }

  showEvolution(cat: string) {

    this.show = false
    let id = cat.charAt(cat.length-5);
    let evolutionId = Number(id) + 1;

    this.apiPokemon.forEach(pokemon => {
      if (pokemon.id === evolutionId && pokemon.parent !== null) {
        this.evolution = cat.replace(id, evolutionId.toString())
      }
    });

  }

  backEvolution() {

    this.evolution = this.evolution.replace(this.evolution.charAt(this.evolution.length-5), (Number(this.evolution.charAt(this.evolution.length-5))-1).toString())
    /*this.apiPokemon.slice().reverse().forEach(pokemon => {
      if (pokemon.id-1 === Number(this.evolution.charAt(this.evolution.length-5))-1) {
        if (pokemon.parent === null) {
          this.evolution = this.evolution.replace(this.evolution.charAt(this.evolution.length-5), (Number(this.evolution.charAt(this.evolution.length-5))-1).toString())
        }
        this.evolution = this.evolution.replace(this.evolution.charAt(this.evolution.length-5), (Number(this.evolution.charAt(this.evolution.length-5))-1).toString())
      }
    });*/


  }

}
