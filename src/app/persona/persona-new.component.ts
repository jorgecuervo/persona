import { Component, OnInit,  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonaService } from './persona.service';
import { FormGroup, FormBuilder, Validators }   from '@angular/forms';
import { InventarioValidator } from './persona.validators';
import {Persona} from './persona';


@Component({
  
    selector: 'persona-new',
    templateUrl: './persona-new.component.html',
    providers: [PersonaService]
})
export class PersonaNewComponent implements OnInit {
     
 titulo = "";       
form: FormGroup;
persona: Persona[];
;
    constructor(
         private  route: ActivatedRoute,
        private router: Router,
        private service: PersonaService,
        private fb: FormBuilder
    ) {this.crearControlesNuevo; }

    ngOnInit() {
        let id = this.route.snapshot.params['idPersona'];
        if (!id) return;
         this.service.getPersona(id)
                  .subscribe(
                     rs => this.persona = rs,
                     er => console.log('Error: %s', er),
                     () => {
                        if (this.persona.length > 0) {
                   
                           this.form.patchValue({
                              idPersona: this.persona[0].idPersona,
                              apellidoPersona: this.persona[0].apellidoPersona,
                              nombrePersona: this.persona[0].nombrePersona,
                              telefonoPersona: this.persona[0].telefonoPersona
                           })
                        }
                     }
                  )
        console.log(id);
      
     }
crearControlesNuevo() {
      this.form = this.fb.group({
         idPersona: ['', Validators.required, InventarioValidator.valorUnico(this.service)],
         apellidoPersona: ['', Validators.compose([Validators.required,Validators.maxLength(10)])],
         nombrePersona: ['', Validators.required],
         telefonoPersona: ['', Validators.required]
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

    updatePersona(persona: Persona) {
      if (!persona) return;
      this.service.putPersona(persona)
                  .subscribe(
                     rt => console.log(rt),
                     er => console.log(er),
                     () => this.goLista()
                  )
   }
    goLista() {
      let link = ['/persona-new'];
      this.router.navigate(link);
   }

   limpiarFormulario() {
      this.form.reset();
   }
    
}