import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import {ResClinicoService} from '../../services/res-clinico.service';
import {ResClinico} from '../../models/res-clinico';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-res-clinico',
  templateUrl: './res-clinico.component.html',
  styleUrls: ['./res-clinico.component.css']
})
export class ResClinicoComponent implements OnInit {

  constructor(private resClinicoService : ResClinicoService) { }
 
  public idOfModified :String = '';
  public allResClinico : ResClinico[];
  public specificResult = new ResClinico ();
  resClinicoToAdd : ResClinico;
  notificationModif : String = '';
  modificarFormulario = new FormGroup({
    nombre : new FormControl('',[Validators.required]), //En validators podemos escoger minLenghth,....
    idMuestra : new FormControl('', [Validators.required]),
    dataResultado : new FormControl('', [Validators.required]),
    resultado: new FormControl('', [Validators.required]),
    tipoTest: new FormControl('', [Validators.required])
  });
  ngOnInit(): void {
  }

  async getAllResClinico(){
    this.allResClinico = await this.resClinicoService.getAllResClinicos().toPromise();
  }
  async getDetailsResClinico(idRes : String){

    this.specificResult = await this.resClinicoService.getResDetails(idRes).toPromise();
    console.log(this.specificResult);
    this.idOfModified = idRes;
  }
  async modifyResClinico(){
    //PARSING ALL THE VALUES
    this.resClinicoToAdd = new ResClinico();
    console.log('Trying to modify result')
    
   let idParamodificar = this.specificResult._id;
   console.log(idParamodificar);
   this.resClinicoToAdd._id = idParamodificar; 
   this.resClinicoToAdd.nombre = this.modificarFormulario.controls['nombre'].value;
   this.resClinicoToAdd.idMuestra = this.modificarFormulario.controls['idMuestra'].value;
   this.resClinicoToAdd.dataResultado = this.modificarFormulario.controls['dataResultado'].value;
   this.resClinicoToAdd.resultado = this.modificarFormulario.controls['resultado'].value;
   this.resClinicoToAdd.tipoTest = this.modificarFormulario.controls['tipoTest'].value;
    await this.resClinicoService.modifyResClinico(this.resClinicoToAdd).subscribe(
      (data) => {
        console.log("data: ", data);
        this.notificationModif = 'Modificado Correctamente';
        this.getAllResClinico();
      },
    (error) => {
        console.log("error: ", error);
        this.notificationModif = 'No ha sido posible modificar este resultado';
    }
    );}

}
