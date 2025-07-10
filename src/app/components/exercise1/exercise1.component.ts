import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MShadowDirective } from './m-shadow.directive';

@Component({
  selector: 'app-exercise1',
  standalone: true,
  imports: [ReactiveFormsModule, MShadowDirective],
  templateUrl: './exercise1.component.html',
  styleUrl: './exercise1.component.scss'
})
export class Exercise1Component {

  name = new FormControl('');

}
