function funcaoSoma(a, b) {
    let soma = a + b;

    function verificaIgual(){
        iguais = (a == b) ? "são iguais" : "não são iguais";
        return iguais
    }
 
    function verifica10() {
        maiorMenor = (soma == 10) ? "igual a" : ((soma > 10) ? "maior que" : "menor que")
        return maiorMenor
    }

    function verifica20(){
        maiorMenor = (soma == 20) ? "igual a" : ((soma < 20) ? "menor que" : "maior que")
        return maiorMenor
    }

    console.log(`Os números a:${a} e b:${b} ${verificaIgual()}. \n Sua soma é ${soma}, que é ${verifica10()} 10 e ${verifica20()} 20.`)
}
funcaoSoma(5, 5)


/* -Crie uma função que recebe dois números como parâmetros. ok
-Confira se os números são iguais.
-Confira se a soma dos números é maior que 10 ou menor que 20.
-Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20". */

//Input: 1, 2
//Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.