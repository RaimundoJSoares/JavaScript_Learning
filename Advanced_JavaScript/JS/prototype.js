class Name{
  constructor(FirstName, LastName) {
    this.FirstName = FirstName,
    this.LastName = LastName
  }

  greet(){
    console.log("Hi there!")
  }
}
Name.prototype.introduce = function() {
  console.log("Hi, I'm " + this.FirstName, this.LastName)
};
Name.prototype.favoriteColor = " \nMy favorite color is Black"

let fullname = new Name("Sakamata", "Chloe")
console.log(fullname.FirstName, fullname.LastName, fullname.favoriteColor)
fullname.introduce()