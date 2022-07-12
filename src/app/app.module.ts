import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingsComponent } from './components/greetings/greetings.component';
import { NavComponent } from './components/nav/nav.component';
import { ProjectTemplateComponent } from './components/project-template/project-template.component';
import { P1Component } from './components/p1/p1.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingsComponent,
    NavComponent,
    ProjectTemplateComponent,
    P1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
