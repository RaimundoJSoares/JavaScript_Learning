cor = "vermelho"
function mudaCor(mudar){
  cor = mudar
};

console.log(cor)
mudaCor("preto")
console.log(cor);

function dizernome() {
  console.log('Raimundo')
};
dizernome();

function multiplicarpordois(valor) {
  return valor * 2
};
console.log(multiplicarpordois(10))

function multiplicarporcinco(valor_dois){
  return valor_dois * 5
};
por_cinco = multiplicarporcinco(15)
console.log(por_cinco);

function output(text){
  console.log(text)
};
output("hello")

function multiplicador(primeiro, segundo){
  return primeiro * segundo
};
console.log(multiplicador(2,3))

const tabela = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];

function raizquadrada(numero){
  return numero **2
};
const raizquadradas = tabela.map(raizquadrada)
console.log(raizquadradas)

function sayhello() {
  let you = prompt("Qual seu nome?");
  console.log("Olá", you + "!")
}
sayhello();

//factory functions - camel case -  umDoisTresQuatroCinco...
function criarSmartphone(marca, tamanhoTela, capacidadeBateria) {
  return {
    marca,
    tamanhoTela,
    capacidadeBateria,
    ligar() {
      console.log('Fazendo ligação...')
    }
  }
}
const celular1 = criarSmartphone('Samsung S12', 6.0, 5000 )
console.log(celular1)

//construction function - pascal Case -  UmDoisTresQuatroCinco....
function Smartphone(marcaCelular, tamanhoTela, capacidadeBateria) {
  this.marcaCelular = marcaCelular,
  this.tamanhoTela = tamanhoTela,
  this.capacidadeBateria = capacidadeBateria,
  this.ligar = function() {
    console.log("Fazendo Ligação...");
  }
}
const Celular = new Smartphone('LG', 5.5, 6000);
console.log(Celular)

//objeto dinamico
const mouse = {
  cor: 'black',
  marca: 'multilaser'
}
mouse.velocidade = 5000;
mouse.trocarDPI = function() {
  console.log('Trocando DPI');
}
delete mouse.velocidade;
delete mouse.trocarDPI;
console.log(mouse)

//clone object
const clone = {...mouse};
console.log(clone)

//Math
function nrandom(){
  return Math.random()
}
console.log(nrandom)

//contruct function treino
function Postagem(titulo, mensagem, autor) {
  this.titulo = titulo,
  this.mensagem = mensagem,
  this.autor = autor,
  this.visualizacoes = 0,
  this.aovivo = false
}
const dados = new Postagem('eu', 'eu mesmo', 'até mesmo eu');
console.log(dados)

//arrow function - simplifica o código
//var soma = function(a, b) {return a + b}
var soma = (a,b) => a+b
console.log(19, 16)