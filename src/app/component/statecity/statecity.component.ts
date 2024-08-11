import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from '../navbar/navbar.component';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-statecity',
  standalone: true,
  imports: [FormsModule, CommonModule, MatCardModule, MatButtonModule, NavbarComponent, BookComponent],
  templateUrl: './statecity.component.html',
  styleUrls: ['./statecity.component.css']
})
export class StatecityComponent implements OnInit {
  
  state: string | null = null;
  city: string | null = null;
  data: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.state = params.get('State');
      this.city = params.get('City');
      this.fetchData();
    });
  }

  fetchData() {
    this.http.get<any[]>('http://localhost:3000/data').subscribe({
      next: (response) => {

        console.log('Raw Response:', response); 
        // log the entire response
        console.log('Sample Data:', response[0]); // Log the first item to inspect its structure

        // Continue with the filtering after ensuring the data is correct
         this.data = response.filter(item => {
  const matchesState = !this.state || item.State?.trim().toLowerCase() === this.state.trim().toLowerCase();
  const matchesCity = !this.city || item.City?.trim().toLowerCase() === this.city.trim().toLowerCase();
  
  console.log(`State: ${item.State}, City: ${item.City}, Matches State: ${matchesState}, Matches City: ${matchesCity}`);
  
  return matchesState && matchesCity;
});

        console.log('Filtered Data:', this.data); // log filtered data
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }
  

}
