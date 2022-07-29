
//Solução 1
function verificaPalindromo(palavra){
    string = palavra
    stringRev = palavra.split("").reverse("").join("")

    if (!string){
        console.log('Insira um valor válido!')
    } else {
        (string == stringRev) ? console.log(`${string} é um palíndromo` ): console.log(`${string} não é um palíndromo`)
    }
} 

verificaPalindromo("ojo oko ojo")

//Solução 2
let resultado
function verificaPalindromo2(palavra) {
    if (!palavra) {
        return "Não é uma palavra válida!"
    }

    for (i = 0 ; i < palavra.length ; i++){
        if (palavra[i] == palavra[palavra.length -1 -i]) {
            return resultado = true  
        }
    }
}

verificaPalindromo2("omo");

(resultado) ? console.log(`é um palíndromo`) : console.log(`não é um palíndromo`)

