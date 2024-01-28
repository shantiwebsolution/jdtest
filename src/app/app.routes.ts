import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    
    {
        path:'', component:HomeComponent
    },
    
    {
        path:'home', component:HomeComponent
    },
    {
        path:'detail', component:DetailsComponent
    },
    
];
