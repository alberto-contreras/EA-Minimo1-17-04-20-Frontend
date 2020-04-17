import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Rooturl} from './rooturl';
import { Observable } from 'rxjs';
import { ResClinico } from '../models/res-clinico';

@Injectable({
  providedIn: 'root'
})
export class ResClinicoService {
  rooturl: Rooturl;

  constructor(private http:HttpClient) {
    this.rooturl = new Rooturl();
   }
   getAllResClinicos(): Observable<ResClinico[]>{
    return this.http.get<ResClinico[]>(`${this.rooturl.urlCovid19}/`);
   }
   addNewResClinico(resClinico:ResClinico): Observable<any> { //Add new resClinico
    console.log("ADDING NEW RESCLINICO TO THE DB");
    let url = this.rooturl.urlCovid19;
    console.log(resClinico);

    return this.http.post(url,resClinico);
  }
  modifyResClinico(resClinico:ResClinico): Observable<any> { //Add new resClinico
    console.log("MODIFY RESCLINICO ");
    console.log(resClinico);
    return this.http.post(`${this.rooturl.urlCovid19}/modificar`,resClinico);
  }
  getResDetails(id:String): Observable<ResClinico>{
    return this.http.get<ResClinico>(`${this.rooturl.urlCovid19}/spec?_id=${id}`);

  }

}