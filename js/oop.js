class Person {
  constructor(firstName, lasName) {
    this.firstName = firstName;
    this.lasName = lasName;
  }
}
//user sempre o "NEW" quando chamar a classe
let fullname = new Person("sakamata", "chloe")
console.log(fullname.firstName, fullname.lasName) 

//Methods
class Persontwo{
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  greet() {
    console.log('Olá',this.firstname, this.lastname,'-san');
  }
}
let greetings = new Persontwo('Sakamata', 'Chloe');
console.log(greetings.greet()); // mnão esquecer de usar o parenteses ja que é function

class Persona {
  constructor(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
  }
  greet() {
    console.log('Hello ', this.firstname, this.lastname, '-san');
  }
  wishes(wish) {
    return "I wish to you a wonderful " + wish;
  }
}
let message = new Persona('Sakamata', 'Chloe');
let happy = message.wishes('Merry Christmas')
console.log(happy, message.greet())

class Information {
  #namee;
  #age
  constructor(namee, age){
    this.#namee = namee;
    this.#age = age;
  }
  get name(){
    return this.#namee;
  }
  set name(namee){
    return this.#namee = namee;
  }
  get age(){
    return this.#age;
  }
  set age(age) {
    return this.#age = age;
  }
}
info = new Information('Sakamata Chloe', 19);
console.log(info.namee);