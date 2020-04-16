import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import {StudentService} from '../../services/student.service';
import {Student} from '../../models/student';
import { Phone } from 'src/app/models/phone';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {

  constructor(private studentService : StudentService) {
   
   }
  studentToAdd = new Student();
  phoneToAdd = new Phone();
  public notificationRegist :String = '';

  registroFormulario = new FormGroup({
    name : new FormControl('',[Validators.required,Validators.minLength(4)]), //En validators podemos escoger minLenghth,....
    address : new FormControl('', [Validators.required]),
    namenum : new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required]),
    studies: new FormControl('', [Validators.required])
  });
  
  ngOnInit(): void {
  }
  addStudent(){
    //PARSING ALL THE VALUES
    console.log('Trying to addStudent')
   this.studentToAdd.name = this.registroFormulario.controls['name'].value;
   this.studentToAdd.address = this.registroFormulario.controls['address'].value;
   this.phoneToAdd.namenum = this.registroFormulario.controls['namenum'].value;
   this.phoneToAdd.number = this.registroFormulario.controls['number'].value;
   this.studentToAdd.addStudies(this.registroFormulario.controls['studies'].value);
   this.studentToAdd.addPhone(this.phoneToAdd);
    this.studentService.addNewStudent(this.studentToAdd).subscribe(
      (data) => {
        console.log("data: ", data);
        this.notificationRegist = 'Succesful';
      },
    (error) => {
        console.log("error: ", error);
        this.notificationRegist = 'Not possible to addd';
    }
    );}

}


// <div class="container">
//     <form [formGroup]="miFormulario" (ngSubmit)="addStudent(miFormulario.value)">
//         Name: <input  id="name" type="text" class="form-control" formControlName="name" required>
//         <div></div>
//         <div *ngIf="name.invalid && (name.dirty || name.touched)"
//          class="alert alert-danger">

//          <div *ngIf="name.errors.required">
//             Name is required.
//         </div>
//         <div *ngIf="name.errors.minlength">
//          Name must be at least 4 characters long.
//          </div>
//         <div *ngIf="miFormulario.get('name').hasError('required') && miFormulario.get('name').touched">Error</div>
//         Address: <input type="text" class="form-control" formControlName="address">
//         <button [disabled]="miFormulario.invalid" class="btn btn-primary" type="submit">Regist</button>
//     </form>
// </div>

