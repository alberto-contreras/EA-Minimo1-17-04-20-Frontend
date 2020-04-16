import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Rooturl} from './rooturl';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  rooturl: Rooturl;
  studentname : String;
  nameToAdd: String;
  subjToAdd: String;

  constructor(private http:HttpClient) {
    this.rooturl = new Rooturl();
   }
   getAllStudentName(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.rooturl.urlStudent}/`);
   }
   //Get the details of a certain user
   getStudentDetails(studentnameIN: String): Observable<Student> { 
     this.studentname= studentnameIN;
    console.log("This is the actual request: "+ this.rooturl.urlStudent+'/{studentname}');
     return this.http.get<Student>(`${this.rooturl.urlStudent}/details?name=${this.studentname}`);

   }
   addStudentToSubj(name: String, subj: String): Observable<any> { //Add student to Subject
    console.log("ADDING NEW STUDENT");
    let url = "http://localhost:3702/school/students/subj/"
    console.log(url);
    return this.http.post(url,{
      name: name,
      subject: subj
    })
  }
  addNewStudent(student:Student): Observable<any> { //Add new student
    console.log("ADDING NEW STUDENT TO THE DB");
    let url = this.rooturl.urlStudent;
    console.log(student);

    return this.http.post(url,student)
  }
  getStudentsDegree(degreeName: String): Observable<Student[]>{ //We get all the students of the degree
    return this.http.get<Student[]>(`${this.rooturl.urlStudent}/degree?degree=${degreeName}`);
   }
}
