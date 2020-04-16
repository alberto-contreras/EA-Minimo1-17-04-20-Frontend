import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { Subject } from 'src/app/models/subject'
import {SchoolService} from "../../services/school.service";
import {StudentService} from "../../services/student.service";


@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  constructor(private schoolService : SchoolService,private studentService: StudentService) { 
    this.subjectSearch = new Subject();
  }
  public Degree : String;
  public DegreeStudents : Student[];
  public subjectSearch : Subject;
  public nameSubject : String = '';
  public subjects : Subject[] ;

  ngOnInit(): void {
  }

  async getDegreeStudents(degree:String){
    this.Degree=degree;
    this.DegreeStudents = await this.studentService.getStudentsDegree(this.Degree).toPromise();
  }
  async getSubjDetails(name:String){ //Getting the
    this.nameSubject = name;
    console.log("Getting Subject Details:");
    console.log(this.nameSubject);
    this.subjectSearch = await this.schoolService.getSubjectDetails(this.nameSubject).toPromise();
    console.log(this.subjectSearch);
  }
  async getallSubjectname(){
    this.subjects = await this.schoolService.getSubjects().toPromise();
    console.log(this.subjects);
  }


}
