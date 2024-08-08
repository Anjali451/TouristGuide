import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-statecity',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './statecity.component.html',
  styleUrl: './statecity.component.css'
})
export class StatecityComponent implements OnInit{
  
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
    this.http.get<any[]>('http://localhost:3000/api/locations').subscribe(response => {
      // Filter data based on state and city
      this.data = response.filter(item => 
        (!this.state || item.State === this.state) &&
        (!this.city || item.City === this.city)
      );
    });
  }
}