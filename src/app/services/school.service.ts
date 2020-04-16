import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Rooturl} from './rooturl';
import { Observable } from 'rxjs';
import { Subject } from '../models/subject';
import { Student } from '../models/student';
@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  rooturl: Rooturl;
  subjectname : String;

  constructor(private http:HttpClient) {
    this.rooturl = new Rooturl();
   }
   getSubjects(): Observable<Subject[]> { //We get an Array of Subjects in order to know which ones we have in the DB
    console.log("This is the actual request: "+ this.rooturl.urlSchool+'/');
      return this.http.get<Subject[]>(this.rooturl.urlSchool+'/');
   }
   getSubjectDetails(subjectnameIN: String): Observable<Subject> {//We obtaina Subject with all the students
     this.subjectname = subjectnameIN;
     console.log("This is the actual request: "+ this.rooturl.urlStudent+'/{subjectname}');
      return this.http.get<Subject>(`${this.rooturl.urlSchool}/students?name=${this.subjectname}`);

   }
}