import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { ToppickComponent } from '../toppick/toppick.component';
import { WinterComponent } from '../winter/winter.component';
import { SummerComponent } from '../summer/summer.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule, MatCardModule, NavbarComponent, ToppickComponent, WinterComponent, SummerComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
