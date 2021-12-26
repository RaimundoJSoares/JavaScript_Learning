//Getters and setters  - encapsulation
class Information {
  #namee;
  #age
  constructor(namee, age){
    this.#namee = namee;
    this.#age = age;
  }
  get namee(){
    return this.#namee;
  }
  set namee(namee){
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

//herança
class Carro {
  constructor(tipo_combustivel) {
    this.quantidade_combustivel = 100
    this.ligado = false
    this.tipo_combustivel =tipo_combustivel
  }
  info(){
    console.log("Quantidade de combustivel: " + this.quantidade_combustivel)
    console.log("Ligado: " + (this.ligado ? "sim" : "não"))
    console.log("Tipo de combustivel: " + this.tipo_combustivel)
  }
  set setLigado(t){
    this.ligado = t
  }
  get getLigado(){
    return this.ligado
  }
  set setComb(v) {
    if(v < 0 || v > 100){
      alert("Valor invalido")
    } else{
      this.quantidade_combustivel=v
    }
  }
  get getcomb(){
    return this.quantidade_combustivel
  }
}
class Carro_corrida extends Carro{
  constructor(){
    super(1)
  }
}

let carro1 = new Carro_corrida();
carro1.info()
