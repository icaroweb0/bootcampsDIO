let anyEstaDeVolta;
anyEstaDeVolta = 1;
anyEstaDeVolta = true;
anyEstaDeVolta = 'dois';
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';
let stringTest2 = 'agora vai';
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
function jogaErro(erro, codigo) {
    throw {
        error: erro, code: codigo
    };
}
jogaErro('deu erro', 500);
