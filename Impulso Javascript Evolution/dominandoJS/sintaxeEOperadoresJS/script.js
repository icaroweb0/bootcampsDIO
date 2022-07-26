function funcaoSoma(a, b) {
    a = Number(prompt('Insira o primeiro número'));
    b = Number(prompt('Insira o segundo número'));
    let soma = a + b;
    (a == b) ? alert(`os numeros ${a} e ${b} são iguais \n Sua soma é ${soma}`) : alert(`os numeros ${a} e ${b} não são iguais` + verificaNumero)
    
    function verificaNumero(){
        (soma > 10) ? `${soma} é maior que 10` : `${soma} é menor do que 10.`;
        (soma < 20) ? `${soma} é menor do que 20` : `${soma} é maior do que 20.`
    }


}
funcaoSoma()

