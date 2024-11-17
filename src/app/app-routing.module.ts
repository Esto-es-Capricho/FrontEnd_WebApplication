import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeConsumerComponent} from "./public/pages/home-consumer/home-consumer.component";
import {ProfileConsumerComponent} from "./users/pages/profile-consumer/profile-consumer.component";
import {DebtsPersonsComponent} from "./debts/pages/debts-persons/debts-persons.component";

const routes: Routes = [
  { path: 'consumer/home', component: HomeConsumerComponent },
  { path: 'consumer/profile', component: ProfileConsumerComponent },
  { path: 'consumer/persons', component: DebtsPersonsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
