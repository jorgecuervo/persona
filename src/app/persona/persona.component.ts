import { Component, OnInit } from '@angular/core';
import { PersonaService } from './persona.service';
import { Persona } from './persona';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

 // lista: Persona[];

  constructor(
    //private servicio: PersonaService
  ) { }

  ngOnInit() {

    //this.servicio.getPersonas()
    //  .subscribe(
     // rs => this.lista = rs,
      //er => console.log(er),
     // () => console.log(this.lista)
      //)

  }

}
