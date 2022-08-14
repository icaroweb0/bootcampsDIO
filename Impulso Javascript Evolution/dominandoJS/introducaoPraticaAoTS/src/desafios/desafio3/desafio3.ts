// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');
let saldoAtual: number = 0

campoSaldo.innerHTML = saldoAtual.toString();

function somarAoSaldo(soma) {
    saldoAtual += soma
    campoSaldo.innerHTML = saldoAtual.toString();
    console.log(saldoAtual)
}

function limparSaldo() {
    saldoAtual = 0
    campoSaldo.innerHTML = saldoAtual.toString();
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
