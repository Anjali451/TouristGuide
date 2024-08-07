import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-toppick',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './toppick.component.html',
  styleUrl: './toppick.component.css'
})
export class ToppickComponent {

}
