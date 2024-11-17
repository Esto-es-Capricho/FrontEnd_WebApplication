import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SideNavegationBarComponent} from "./public/components/side-navegation-bar/side-navegation-bar.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeConsumerComponent } from './public/pages/home-consumer/home-consumer.component';
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";
import { NotificationCardComponent } from './users/components/notification-card/notification-card.component';
import { ProfileConsumerComponent } from './users/pages/profile-consumer/profile-consumer.component';
import { ConsumerCardComponent } from './users/components/consumer-card/consumer-card.component';
import { ConsumerEditComponent } from './users/components/consumer-edit/consumer-edit.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import { DebtCardComponent } from './debts/components/debt-card/debt-card.component';
import { DebtsPersonsComponent } from './debts/pages/debts-persons/debts-persons.component';
import { DebtPersonCardComponent } from './debts/components/debt-person-card/debt-person-card.component';




@NgModule({
  declarations: [
    AppComponent,
    SideNavegationBarComponent,
    HomeConsumerComponent,
    NotificationCardComponent,
    ProfileConsumerComponent,
    ConsumerCardComponent,
    ConsumerEditComponent,
    DebtCardComponent,
    DebtsPersonsComponent,
    DebtPersonCardComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    CommonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,


  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
