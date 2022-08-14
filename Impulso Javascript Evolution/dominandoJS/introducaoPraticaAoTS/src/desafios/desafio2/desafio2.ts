// Como podemos melhorar o esse código usando TS? 

enum Profissao {
    Actress,
    Padeiro
}

interface IPessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

let pessoa1: IPessoa = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.Actress
}
let pessoa2: IPessoa = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro
}

let pessoa3: IPessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Actress
};

let pessoa4: IPessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}