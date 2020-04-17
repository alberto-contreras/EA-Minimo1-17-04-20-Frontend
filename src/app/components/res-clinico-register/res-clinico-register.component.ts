import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import {ResClinicoService} from '../../services/res-clinico.service';
import {ResClinico} from '../../models/res-clinico';

@Component({
  selector: 'app-res-clinico-register',
  templateUrl: './res-clinico-register.component.html',
  styleUrls: ['./res-clinico-register.component.css']
})
export class ResClinicoRegisterComponent implements OnInit {

  constructor(private resClinicoService : ResClinicoService) { }
  resClinicoToAdd : ResClinico;
  notificationRegist : String = '';
  registroFormulario = new FormGroup({
    nombre : new FormControl('',[Validators.required]), //En validators podemos escoger minLenghth,....
    idMuestra : new FormControl('', [Validators.required]),
    dataResultado : new FormControl('', [Validators.required]),
    resultado: new FormControl('', [Validators.required]),
    tipoTest: new FormControl('', [Validators.required])
  });


  ngOnInit(): void {
  }

  addResClinico(){
    this.resClinicoToAdd = new ResClinico();
    //PARSING ALL THE VALUES
    console.log('Trying to addStudent')
   this.resClinicoToAdd.nombre = this.registroFormulario.controls['nombre'].value;
   this.resClinicoToAdd.idMuestra = this.registroFormulario.controls['idMuestra'].value;
   this.resClinicoToAdd.dataResultado = this.registroFormulario.controls['dataResultado'].value;
   this.resClinicoToAdd.resultado = this.registroFormulario.controls['resultado'].value;
   this.resClinicoToAdd.tipoTest = this.registroFormulario.controls['tipoTest'].value;
    this.resClinicoService.addNewResClinico(this.resClinicoToAdd).subscribe(
      (data) => {
        console.log("data: ", data);
        this.notificationRegist = 'Añadido Correctamente';
      },
    (error) => {
        console.log("error: ", error);
        this.notificationRegist = 'No ha sido posible añadir este resultado';
    }
    );}
}
