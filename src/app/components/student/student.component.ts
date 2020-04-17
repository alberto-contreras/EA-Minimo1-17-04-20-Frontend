import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { Subject } from 'src/app/models/subject'
import {StudentService} from "../../services/student.service";
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public idToAdd : String;
  public SubjectToAdd: String;
  constructor(private studentService: StudentService) { }
  public allStudents : Student[];
  public notificationAddition : String = '';
   ngOnInit(): void {

  }
  async getAllStudents(){
    this.allStudents = await this.studentService.getAllStudentName().toPromise();
  
  }
  LabelCheckAddUsersubject(event: any){
    this.SubjectToAdd=event.target.value;
  }
  async addStudentToSubject(idStudent:String){
    this.idToAdd = idStudent;
    this.studentService.addStudentToSubj(this.idToAdd,this.SubjectToAdd).subscribe(
     (data) => {
       console.log("data: ", data);
       this.notificationAddition = 'Succesufully Added'
     },
   (error) => {
       console.log("error: ", error);
       this.notificationAddition = 'Not possible to add'
   }
   );
 }

}

// <h3>Students Information</h3>
// <button (click)="getAllStudents()">GET ALL Students</button>  
// <li *ngFor = "let student of allStudents">
//     <h5>{{student.name}}  </h5>
    
//  (In case you want to add a user to a subject):
//     <input  type="text" (keyup)="LabelCheckAddUsersubject($event)"> <button (click)="addStudentToSubject(student.name)">Add to a Subject</button> 
//     <p></p>
// </li>



