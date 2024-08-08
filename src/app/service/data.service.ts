import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:3000/api/locations';

  constructor(private http: HttpClient) { }

  getLocations() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
