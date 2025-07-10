import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercise3Component } from './exercise3.component';
import { Pokemon } from '../../common/iPokemon';
import { PokemonService } from '../../services/pokemon.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

fdescribe('Exercise3Component', () => {
  let component: Exercise3Component;
  let fixture: ComponentFixture<Exercise3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise3Component],
       providers: [
        PokemonService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be apiPokemon', () => {
    expect(component.apiPokemon).toBeDefined();
  });

  it('should be pokemon', () => {

    expect(component.pokemon).toBeDefined();
  });

  it('should be category', () => {
    expect(component.category).toBeDefined();
  });

  it('should call searchPokemos()', () => {

    const spy = spyOn(component.searchPokemos(), '');

    const pokemonMock: Pokemon = {
      id: 0,
      name: '',
      category_id: null,
      parent: null,
      photo: ''
    };

    component.searchPokemos(pokemonMock);

    expect(component.searchPokemos).toHaveBeenCalledWith(pokemonMock);
  });

});
