import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { BarComponent } from './components/bar/bar.component';
import { SpecialComponent } from './components/special/special.component';
import { GallerieComponent } from './components/gallerie/gallerie.component';



export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'bar', component: BarComponent },
    { path: 'special', component: SpecialComponent },
    { path: 'gallerie', component: GallerieComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);