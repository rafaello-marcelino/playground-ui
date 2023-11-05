import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SamplesComponent } from './samples/samples.component';
import { LandComponent } from './land/land.component';
import { BirdsComponent } from './birds/birds.component';
import { AstroComponent } from './astro/astro.component';
import { RandomsComponent } from './randoms/randoms.component';
import { StreetComponent } from './street/street.component';

const routes: Routes = [
  {path: `home`, component: HomeComponent},
  {path: `samples`, component: SamplesComponent, 
  children : [
    {path: `land`, component: LandComponent },
    {path: `birds`, component: BirdsComponent},
    {path: `astro`, component: AstroComponent},
    {path: `street`, component: StreetComponent},
    {path: `randoms`, component: RandomsComponent},
    {path: `**`, component: LandComponent, pathMatch:'full'},
  ]},
  {path: `contact`, component: ContactComponent},
  {path: `**`, component: HomeComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
