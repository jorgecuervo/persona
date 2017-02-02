import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonaEditComponent } from './persona/persona-edit.component';
import { PersonaNewComponent } from './persona/persona-new.component';


const appRouters: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'persona', component: PersonaComponent },
    { path: 'employee-edit/:id', component: PersonaEditComponent },
    { path: 'employee-new', component: PersonaNewComponent },
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