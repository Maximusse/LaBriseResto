import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserXhr  } from '@angular/http';
import { NgProgressModule, NgProgressBrowserXhr  } from 'ngx-progressbar';
import { Routes, RouterModule } from '@angular/router';
import { ScrollToModule } from 'ng2-scroll-to-el';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { BarComponent } from './components/bar/bar.component';
import { SpecialComponent } from './components/special/special.component';
import { GallerieComponent } from './components/gallerie/gallerie.component';
import { EvenementsComponent } from './components/evenements/evenements.component';

import { EventsService } from './services/events.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    BarComponent,
    SpecialComponent,
    GallerieComponent,
    EvenementsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routes,
    NgProgressModule,
    ScrollToModule.forRoot()
  ],
  providers: [
    {provide: BrowserXhr, useClass: NgProgressBrowserXhr}, EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
