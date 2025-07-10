import { Component, signal } from '@angular/core';
import { Exercises } from '../../common/exercises';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  exercises = signal <Exercises []>([
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4}
  ])

}
