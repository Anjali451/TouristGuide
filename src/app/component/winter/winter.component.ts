import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-winter',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, FormsModule, RatingModule],
  templateUrl: './winter.component.html',
  styleUrl: './winter.component.css'
})
export class WinterComponent {
value: any;

}
