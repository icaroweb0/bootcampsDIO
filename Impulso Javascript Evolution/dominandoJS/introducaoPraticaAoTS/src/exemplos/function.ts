function printaValoresNumericos (num1: number, num2: number): void {
    console.log(num1 + num2)
}

function somarValoresNumericosETratar(num1: number, num2: number, callback: (numero: number) => number): number{
    let resultado = num1 + num2
    return callback(resultado);
}

function aoQuadrado(numero: number): number {
    return numero * numero
}

function dividirPorEleMesmo(numero: number): number {
    return numero / numero
}

console.log(somarValoresNumericosETratar(1, 3, aoQuadrado))
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo))