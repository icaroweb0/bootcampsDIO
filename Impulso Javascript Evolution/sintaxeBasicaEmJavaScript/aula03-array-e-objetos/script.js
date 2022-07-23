/* Funções para manipulações de arrays em JS 

    • forEach() – itera um array;
    • push() – add item no final do array;
    • pop() – remove item no final do array;
    • shift() – remove item no início do array;
    • unshift() – add item no início do array;
    • indexOf() – retorna o índice de um valor;
    • splice() – remove ou substitui um item pelo índice;
    • slice() – retorna uma parte de um array existente; 
*/

let array = ['string', 1, true, ['array1,','array1.2'],['array2'],['array3'],['array4']];

//    • forEach() – itera um array;
//array.forEach(function(item, index){console.log(item, index)})

//    • push() – add item no final do array;
/* array.push('novo item');
console.log(array)
 */

//    • pop() – remove item no final do array;
/* array.pop();
console.log(array) */

//    • shift() – remove item no início do array;
/* array.shift();
console.log(array) */

//    • unshift() – add item no início do array;
/* array.unshift('itemNovao')
console.log(array) */

//    • indexOf() – retorna o índice de um valor;
//console.log(array.indexOf(1))

//    • splice() – remove ou substitui um item pelo índice;
/* array.splice(0,4);
console.log(array) */

//    • slice() – retorna uma parte de um array existente; 
//console.log(array.slice(0, 4))



//>>>> Objetos <<<<
let object = {string: 'stringer', number: 1, boolean: true, array: ['arrayAqui', 'item2'], internObject:{objetoInterno1: 'exemplo1', objetoInterno2: 'exemplo2'}};
//console.log(object.internObject.objetoInterno1)

/* var string = object.string
console.log(string)

var intern = object.internObject
console.log(intern) */

var { boolean, internObject, number} = object

console.log(boolean, internObject, number)