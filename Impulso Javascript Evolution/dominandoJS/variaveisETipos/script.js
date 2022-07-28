
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
