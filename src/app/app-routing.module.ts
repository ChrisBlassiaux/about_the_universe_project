import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { IndexShowPeopleComponent } from './index-show-people/index-show-people.component';
import { IndexShowPlanetsComponent } from './index-show-planets/index-show-planets.component';
import { IndexShowVehiclesComponent } from './index-show-vehicles/index-show-vehicles.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'planets', component: IndexShowPlanetsComponent },
  { path: 'vehicles', component: IndexShowVehiclesComponent },
  { path: 'people', component: IndexShowPeopleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
