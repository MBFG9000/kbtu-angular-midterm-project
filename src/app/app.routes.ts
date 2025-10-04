import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
    { path:'', component: LandingComponent,},
    { path:'blogs', component: BlogsComponent},
    { path:'aboutus', component: AboutUsComponent},
];
