function erro(array, num){
	try {
		if (!array&&!num) throw new ReferenceError("Insira um parametro")

		if (typeof array !== 'object' ) throw new TypeError("O array precisa ser um objeto")

		if (typeof num !== 'number') throw new TypeError(`${num} Precisa ser numero`)

		if (array.length !== num) throw new RangeError(`${array} precisa ser do mesmo tamanho de ${num}`)

		return array
	} 

	catch(e) {
		if (e instanceof ReferenceError){
			console.log("Este é um erro do tipo ReferenceError")
			console.log(e.message)
		}

		else if (e instanceof TypeError){
			console.log("Este é um erro do tipo TypeError")
			console.log(e.message)
		}

		else if (e instanceof RangeError){
			console.log("Este é um erro do tipo RangeError")
			console.log(e.message)
		}

		else {
			console.log(`Ocorreu um erro inesperado ${e}`)
		}
	}
}

console.log(erro([5,5,5,2,3],5))