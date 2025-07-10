import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCategoriesComponent } from './pokemon-categories.component';

describe('PokemonCategoriesComponent', () => {
  let component: PokemonCategoriesComponent;
  let fixture: ComponentFixture<PokemonCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
