for (let i =0; i < 5; i++ ){
  console.log('counting', i)
}

//do while
let i = 1
do {
  console.log('digitando', i);
  i++;
}
while(i < 5)

//for , while, do while
//key value
const pessoa = {
  nome:'chloe', //key ou chave é o nome, e value é a resposta
  profissao: 'vtuber'
}

for(let key in pessoa) {
  console.log(key, pessoa['nome']);
}

const cores = ['azul', 'vermelho', 'preto', 'verde']

for (let indice in cores) {
  console.log(indice, cores[indice]);
}

//for of  - melhor opção
for (let cor of cores){
  console.log(cor);
}

const objetos = ['garrafa', 'pc', 'teclado', 'mouse', 'cadeira']
for (let coisas of objetos){
  console.log(coisas)
}