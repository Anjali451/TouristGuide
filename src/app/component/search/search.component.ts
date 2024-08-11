import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule, MatCardModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  State: string = '';
  City: string = '';

  constructor(private router: Router) { }

  search() {
    // Navigate to the statecity component with state and city as query parameters
    this.router.navigate(['/statecity'], { queryParams: { State: this.State, City: this.City } });
  }
}