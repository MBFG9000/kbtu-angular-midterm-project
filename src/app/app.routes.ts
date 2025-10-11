import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ToursListComponent } from './tours-list/tours-list.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
    { path:'', component: LandingComponent,},
    { path:'tours', component: ToursListComponent},
    { path:'aboutus', component: AboutUsComponent},
];
