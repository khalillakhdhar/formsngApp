import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PersonsComponent } from './persons/persons.component';
import { EventComponent } from './event/event.component';
import { AdresseComponent } from './adresse/adresse.component';

const routes: Routes = [
  {
    path:'',component:WelcomeComponent
  },
  {
    path:'person', component:PersonsComponent
  },
  {
    path:"event",component:EventComponent
  },
  {
    path:"adresse",component:AdresseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
