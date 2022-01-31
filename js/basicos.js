let num1 = 9.132131413434142;
let num2 = Math.round(num1);

console.log(num2)

const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio)

function saudacao (nome) {
  console.log(`Olá ${nome}`)
}
saudacao('rai')

function saudacao2(nome2) {
  return `Olá ${nome2}`
}
const teste2 = saudacao2('Rai')
console.log(teste2)

function soma (x, y) {
  return (x + y)
}

const resultado = soma(33, 22);
console.log(resultado)

const array = [1 , 2 ,3 ]
array.push(66)
array[0] = 'chloe'
array[2] = 'ark'

console.log(array)

//para criar um OBJETO eu uso chaves, assim :
function pessoa(nome, idade) {
  return {
    nome: nome,
    idade : idade
  }
}
const pessoa1 = pessoa('wwww', 20); //valor é o argumento que é passado para o parametro
console.log(pessoa1)

const falando = {
  nome: 'sakamata',
  sobrenome: 'kuroe',

  talk() {
    console.log(`${this.nome} ${this.sobrenome} está dizendo olá`)
  }
}
falando.talk()
