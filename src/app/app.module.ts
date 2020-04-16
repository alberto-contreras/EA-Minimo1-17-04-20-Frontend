import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule, ɵInternalFormsSharedModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SchoolComponent } from './components/school/school.component';
import { StudentComponent } from './components/student/student.component';

import { StudentRegisterComponent } from './components/student-register/student-register.component';




const appRoutes: Routes = [
  { path: 'school', component: SchoolComponent },
  { path: 'students', component: StudentComponent },
  { path: 'registerStudent', component: StudentRegisterComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    StudentComponent,
    StudentRegisterComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
