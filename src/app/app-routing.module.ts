import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonaComponent } from './persona/persona.component';

import { PersonaNewComponent } from './persona/persona-new.component';


const appRouters: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'persona', component: PersonaComponent },    
    { path: 'persona-new', component: PersonaNewComponent },
    { path: '', component: HomeComponent }




];

@NgModule({
    imports: [
        RouterModule.forRoot(appRouters)
    ],
    exports: [
        RouterModule
    ]



})

export class AppRoutingModule { }