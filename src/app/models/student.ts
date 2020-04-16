import { Phone } from './phone';
export class Student {
    _id: String;
    name: String;
    address: String;
    phones: Phone[];
    studies : String[];

    constructor() {
      this.phones = [];
      this.studies = [];
    }

    /**Student(){
    * this.phone = new Phone[10]
    }**/


    addPhone(newPhone : Phone){
        this.phones.push(newPhone);
    }
    addStudies(newStudies : String){
      this.studies.push(newStudies);
  }
}