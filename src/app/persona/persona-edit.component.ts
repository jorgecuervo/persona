import { Component, OnInit,  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  
    selector: 'persona-edit',
    templateUrl: './persona-edit.component.html'
})
export class PersonaEditComponent implements OnInit {
     


    constructor(
        private  route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {

        let id = this.route.snapshot.params['id'];
        if (!id) return;
        console.log(id);
      
     }

    
}