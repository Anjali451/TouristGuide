import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { BookComponent } from './component/book/book.component';
import { StatecityComponent } from './component/statecity/statecity.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path:'book', component:BookComponent},
    { path: 'statecity', component: StatecityComponent }
];
