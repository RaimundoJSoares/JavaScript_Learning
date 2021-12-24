class Person {
  constructor(firstName, lasName) {
    this.firstName = firstName;
    this.lasName = lasName;
  }
}
//user sempre o "NEW" quando chamar a classe
fullname = new Person("sakamata", "chloe")
console.log(fullname.firstName) 
console.log(fullname.lasName)


 class Persona {
   constructor(firstName, LastName, date) {
     this.firstName = firstName;
     this.LastName = LastName;
     this.setDateOfBirth(date);
   }

   getDateofBirth(){
     return this._dateOfBirth;
   }
   setDateofBirth(value){
     if (value instanceof Date && value < Date.now()){
       this._dateOfBirth = value;
     }
     else {
       throw new TypeError('Birthdate cannot be in the futue');

     }
   }
 }
 const newperson = new Persona('sakamata', 'Chloe', new Date(2021,11,11));
 console.log(newperson.getDateofBirth());