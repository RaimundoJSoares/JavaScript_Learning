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

