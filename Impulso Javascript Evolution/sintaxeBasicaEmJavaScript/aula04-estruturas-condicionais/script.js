/* var jogador1 = 1
var jogador2 = 4
var placar
//estrutura condicional if ternário
jogador1 < 0 || jogador2 < 0 ? console.log('Jogadores inválidos'):console.log('os jogadores são válidos')

//estrutura condicional if
if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
} 

//estrutura condicional else if 
else if ( jogador2 > 0) {
    console.log('Jogador 2 marcou ponto!');
    placar = jogador2 > jogador1;
}

else {
    console.log('Ninguém acertou!')
}

console.log('O placar atual é: \n jogador 1 = ' + jogador1 + '\n jogador 2 = ' + jogador2)

//estrutura condicional switch

switch (placar){
    case placar = jogador1 > jogador2:
    console.log('jogador 1 ganhou');
    break;

    case placar = jogador2 > jogador1:
    console.log('jogador 2 ganhou');
    break;
    default:
        console.log('Ninguém ganhou')
} */

var array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']
var object = { propriedade: 'vO1', propriedade2: 'vO2', propriedade3: 'vO3'}

//for executa uma instrução até que ela seja falsa
//  valor inicial; condição; instrução
/* for (let indice = 0; indice < array.length; indice++){
    console.log(indice)
} */

//for/in Funciona como uma repetição a partir de uma propriedade

// for (<[indice]> in <{objeto} ou [array]>) {declaração}

/* 
for (i in array) {
    console.log (i)
}

for (i in object) {
    console.log (i)
} 
*/

//for/of Funciona como uma repetição a partir de um valor

// for (<[indice]> of [array]) {declaração}

/* for (i of array) {
    console.log(i)
} */

//não se pode utilizar o for of em um objeto pois ele nao é iterável, seria necessario informar uma propriedade do objeto e ele retornaria cada letra em uma linha 

/* for (i of object.propriedade) {
    console.log(i)
} */

//----------------------------------
// while executa uma instrução "antes" da execução, enquanto aquela condição for verdadeira.
// while (<condição>) {instrução}

/* var a = 1

while (a < 10) {
    a++;
    console.log(a);
} */


//-----------------------------------
//do while executa uma condição "até que" determinada condição seja falsa, a verificação é feita depois da execução.

/* var a = 0 
    do { 
        a++;
        console.log(a);
    } while (a < 10) */

