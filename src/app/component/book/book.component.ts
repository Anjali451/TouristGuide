import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { NavbarComponent } from '../navbar/navbar.component';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [HomeComponent, NavbarComponent, MatCardModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

}
