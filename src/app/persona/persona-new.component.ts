import { Component, OnInit,  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonaService } from './persona.service';
import { FormGroup, FormBuilder, Validators }   from '@angular/forms';
import {Persona} from './persona';


@Component({
  
    selector: 'persona-new',
    templateUrl: './persona-new.component.html',
    providers: [PersonaService]
})
export class PersonaNewComponent implements OnInit {
     
 titulo = "";       
form: FormGroup;
persona: Persona[]
;
    constructor(
         private  route: ActivatedRoute,
        private router: Router,
        private service: PersonaService,
        private fb: FormBuilder
    ) {this.crearControlesNuevo; }

    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        if (!id) return;
        console.log(id);
      
     }
crearControlesNuevo() {
      this.form = this.fb.group({
         idPersona: ['', Validators.required, InventarioValidator.valorUnico(this.service)],
         apellidoPersona: '',
         nombrePersona: '',
         telefonoPersona: ''
      })
   }

   agregarPersona() {
      this.service.addPersona(this.form.value)
                  .subscribe(
                     rt => console.log(rt),
                     er => console.log(er),
                     () => console.log('Terminado')
                  );
   }
    
}