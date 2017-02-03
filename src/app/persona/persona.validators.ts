import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

import { PersonaService } from './persona.service';

export class InventarioValidator {

   static valorUnico(servicio: PersonaService): ValidatorFn {
      return (control: AbstractControl): {[key:string]:any} => {
         if (this.isPresent(Validators.required(control))) return null;
         console.log("si pasa");
         var v = control.value;

         return new Promise( (resolve, reject) => {
            servicio.getPersona(v).subscribe(
               data => {
                  if (data.length > 0)
                     resolve({valorUnico:true});
                  else
                     resolve(null);
               },
               err => resolve({valorUnico:true})
            )
         })
      }
   }

   static isPresent(obj: any): boolean {
      return obj !== undefined && obj !== null;
   }
}