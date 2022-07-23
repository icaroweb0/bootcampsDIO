//tipos de função

//declarativa
/* São funções que possuem o uso mais comum, deve ser declarada
usando a palavra reservada “function” seguida do nome da
função, parênteses “()” e chaves “{}”: */

/* function funcaoDeclarativa (){
    console.log('essa é uma função declarativa');
}

funcaoDeclarativa(); */

//expressão de função 
/* São funções atribuídas à expressões. A nomeação das funções por
expressão é opcional: */

//ex. 1
/* var funcao = function nomeFuncao () {
    console.log('Sou uma mensagem de função de expressão nomeada!')
}

funcao(); */

//ex. 2

/* var funcao2 = function () {
    console.log('Sou uma mensagem de função de expressão sem nome!')
}

funcao2() */


//arrow function
/* São funções de expressão de sintaxe curta. Arrow functions
sempre serão anônimas, e portanto não podem ser nomeadas.
deve ser declarada com parênteses "()", seguido de "=>" e depois
chaves "{}" */

/* var funcao3 = () => {
    console.log('Sou uma mensagem de uma arrow function!')
} */