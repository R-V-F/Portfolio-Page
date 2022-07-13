import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingsComponent } from './components/greetings/greetings.component';
import { NavComponent } from './components/nav/nav.component';
import { ProjectTemplateComponent } from './components/project-template/project-template.component';
import { P1Component } from './components/p1/p1.component';
import { ShortComponent } from './components/p1/short/short.component';
import { LongComponent } from './components/p1/long/long.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingsComponent,
    NavComponent,
    ProjectTemplateComponent,
    P1Component,
    ShortComponent,
    LongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
