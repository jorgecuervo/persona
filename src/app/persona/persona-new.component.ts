import { Component, OnInit,  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonaService } from './persona.service';
import { FormGroup, FormBuilder, Validators }   from '@angular/forms';


@Component({
  
    selector: 'persona-new',
    templateUrl: './persona-new.component.html',
    providers: [PersonaService]
})
export class PersonaNewComponent implements OnInit {
     
 titulo = "";       
form: FormGroup;

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
         idPersona: '',
         apellidoPersona: '',
         nombrePersona: '',
         telefonoPersona: '',
         proveedor: ''
      })
   }
    
}