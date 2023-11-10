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
import { HobbiesComponent } from './hobbies/hobbies.component';
import { AboutComponent } from './about/about.component';
import { GearComponent } from './gear/gear.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { CustomsComponent } from './customs/customs.component';

const routes: Routes = [
  {path: `home`, component: HomeComponent,children : [
    {path: `about`, component: AboutComponent },
    {path: `gear`, component: GearComponent},
    {path: `contact`, component: ContactComponent},
    {path: `**`, component: HomeComponent, pathMatch:'full'},
  ]},
  {path: `samples`, component: SamplesComponent, 
  children : [
    {path: `astro`, component: AstroComponent},
    {path: `land`, component: LandComponent },
    {path: `birds`, component: BirdsComponent},
    {path: `street`, component: StreetComponent},
    {path: `randoms`, component: RandomsComponent},
    {path: `**`, component: AstroComponent, pathMatch:'full'}
  ]},
  {path: `hobbies`, component: HobbiesComponent, 
  children : [
    {path: `keyboard`, component: KeyboardComponent},
    {path: `customs`, component: CustomsComponent},
    {path: `**`, component: KeyboardComponent, pathMatch:'full'}
  ]},
  {path: `**`, component: HomeComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
