const alunos = [
    {
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
]

function media(array, media){
    let aprovados = []
    for (i = 0 ; i < array.length ; i++ ){
        if (alunos[i].nota >= media) {
            aprovados.push(alunos[i].nome)
        }
    }
    console.log(`os alunos aprovados são:\n ${aprovados}`)
}
media(alunos, 6)

console.log(alunos[1])