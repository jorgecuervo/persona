import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PersonaComponent } from './persona/persona.component';
import {PersonaEditComponent} from './persona/persona-edit.component'
import {PersonaNewComponent} from './persona/persona-new.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonaComponent,
    PersonaEditComponent,
    PersonaNewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
