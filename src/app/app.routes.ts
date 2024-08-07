import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { BookComponent } from './component/book/book.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path:'book', component:BookComponent}
];
