import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SamplesComponent } from './samples/samples.component';
import { ContactComponent } from './contact/contact.component';
import { LandComponent } from './land/land.component';
import { BirdsComponent } from './birds/birds.component';
import { AstroComponent } from './astro/astro.component';
import { RandomsComponent } from './randoms/randoms.component';
import { StreetComponent } from './street/street.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    SamplesComponent,
    ContactComponent,
    LandComponent,
    BirdsComponent,
    AstroComponent,
    RandomsComponent,
    StreetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
