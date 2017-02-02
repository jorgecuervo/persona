import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Persona} from './persona';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch'; 
import { Observable }     from 'rxjs/Observable';
@Injectable()
export class PersonaService {
  private Headers = new Headers({'Content-Type' :'application/json'});
  private url = "http://localhost:9432/rest/"

  constructor(    private http:Http  ) { }

   getPersonas(): Observable<Persona[]> {
    let url = `${this.url}`;
    return this.http.get(url)
                    .map(r => r.json())
                    .catch(this.handleError);
  }


 addPersona (persona: Persona) {
    let url = `${this.url}`;
    let iJson = JSON.stringify(persona);
    return this.http.post(url, iJson, {headers:this.Headers})
                    .map(response => response.json())
                    .catch(this.handleError);;
  }



  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

