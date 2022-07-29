function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos} anos de idade.`;
}

const pessoa1 = {	
		nome: "Josias",
		idade: 32
	}

const pessoa2 =	{
		nome: "Maria",
		idade: 22
	}

const pessoa3 =	{
		nome: "Fabrício",
		idade: 60
	}

const animal =	{
		nome: "Little",
		idade: 2,
		raca: "PubG"
	}

console.log(calculaIdade.call(pessoa1, 20))
console.log(calculaIdade.apply(animal, [5]))