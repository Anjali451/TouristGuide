import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-summer',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './summer.component.html',
  styleUrl: './summer.component.css'
})
export class SummerComponent {

}
