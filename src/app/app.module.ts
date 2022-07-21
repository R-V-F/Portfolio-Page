import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingsComponent } from './components/greetings/greetings.component';
import { NavComponent } from './components/nav/nav.component';
import { P1Component } from './components/p1/p1.component';
import { ShortComponent } from './components/p1/short/short.component';
import { LongComponent } from './components/p1/long/long.component';
import { P2Component } from './components/p2/p2.component';
import { Short2Component } from './components/p2/short2/short2.component';
import { Long2Component } from './components/p2/long2/long2.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GreetingsComponent,
    NavComponent,
    P1Component,
    ShortComponent,
    LongComponent,
    P2Component,
    Short2Component,
    Long2Component,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
