import { Component, computed, input, output } from '@angular/core';
import { Pokemon } from '../../common/iPokemon';

@Component({
  selector: 'app-pokemon-categories',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-categories.component.html',
  styleUrl: './pokemon-categories.component.scss'
})
export class PokemonCategoriesComponent {

  apiPokemon = input.required<Pokemon[]>();   
  pokemonSelected = output<Pokemon>();   

  sortedCategories = computed(() =>
    (this.apiPokemon() || []).filter(pokemon => pokemon.category_id === null)
    .sort((a, b) => a.name.localeCompare(b.name))
  );


  emitPokemon(pokemon: Pokemon): void {
    this.pokemonSelected.emit(pokemon);
  }

}
