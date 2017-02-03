import { Component, OnInit } from '@angular/core';
import { PersonaService } from './persona.service';
import { Persona } from './persona';
import { Router }            from '@angular/router';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers: [PersonaService]
})
export class PersonaComponent implements OnInit {

 lista: Persona[];

  constructor(
    private router: Router,
    private servicio: PersonaService
  ) { }

  ngOnInit() {

    this.servicio.getPersonas()
     .subscribe(
     rs => this.lista = rs,
      er => console.log(er),
     () => console.log(this.lista)
      )

  }


  Editar(item: Persona) {
       let link = ['/persona-new',item.idPersona];
       this.router.navigate(link);
   }

   Borrar(item: Persona) {
       if(!item) return;

       this.servicio.delPersona(item.idPersona)
                    .subscribe(
                        rs => console.log(rs),
                        er => console.log(er),
                        () => {
                            this.lista = this.lista.filter(h => h !== item)
                        }
                    )
   }

}
