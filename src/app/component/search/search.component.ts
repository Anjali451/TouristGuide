import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  State: string = '';
  City: string = '';

  constructor(private router: Router) { }

  search() {
    this.router.navigate(['/statecity'], { queryParams: { State: this.State, City: this.City } });
  }
}