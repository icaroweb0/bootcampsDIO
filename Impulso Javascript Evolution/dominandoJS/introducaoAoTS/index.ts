//types
//interfaces
/* 
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande'
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre',
} */

//interfaces geralmente são usadas para fazer contratos "classes"

//types geralmente sao usados para fazer merges


//tratando as tags HTML 

// foi criado a variável input que recebeu um elemento HTML, através do TS foi definido qual o tipo de dado que iria ser processado, no caso HTMLINputElement
/* const input = document.getElementById('input') as HTMLInputElement;

//foi criado uma função para tratar o retorno do listener
input.addEventListener('input', (event) => {
    //a const i recebeu um evento do input como um input element
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value)
}); */



//Generic Types 

/* function adicionaApendiceALista<T>(array: T[], valor: T) {
    return array.map(() => valor);
}

adicionaApendiceALista([1, 2, 3], 1); */


//Exporando classes, tipos e interfaces
/* 
interface IUsuario {
    id: string;
    email: string;
    //? transofma o item em opcional
    cargo?: 'gerente' | 'coordenador' |'supervisor' | 'funcionario';
}

function redirecione (usuario: IUsuario) {
    if (usuario.cargo) {
      //redirecionar(usuario.cargo);
    }
    //redirecionar para a área do usuário
 } */

 
 // Criando variáveis com a propriedade readonly e private

/*  interface ICachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
 }

 //define o typo para a interface cachorro, dizendo que a cada nova chave ela será apenas readonly
 type CachorroSomenteLeitura = {
    +readonly[K in keyof ICachorro]-?: ICachorro[K];
 }

 class MeuCachorro implements ICachorro {
    idade;
    nome;
    parqueFavorito;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
 }

 const cao = new MeuCachorro('Apolo', 14);

 console.log(cao) */


 //Como importar bibliotecas com TS
/* import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova funcao');
    }
});

$('body').novaFuncao(); */

interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

