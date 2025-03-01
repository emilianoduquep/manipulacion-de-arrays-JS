/*
este ejercicio busca dividir el array en dos o mas sub-arrays agrupados de a 4 numeros.
Luego estos numeros se les debera colocar un simbolo de pesos y finalmente deberan
convertirse en un array de strings con una frase prefijo.
*/


const array1 = ['1,000','2,000','3,000','4,000','5,000'];


/**
 * Divide un array en sub-arrays de tamaño específico.
 *
 * @param {Array} arr - El array que se va a dividir.
 * @returns {Array} finlaArrayCompleted: Un array de sub-arrays con un prefijo.
 * @example
 * // Dividir [1,2,3,4,5,6,7,8] en grupos de 2
 * console.log(convertArray(array1,"frase prueba:","$"));
 * // Resultado: [ 'frase prueba:$1,000$2,000$3,000$4,000', 'frase prueba:$5,000' ]
 */
function convertArray(arr, strPrase, symbol=null) {
    let newArr = [];
    let converted = [];
    let finlaArrayCompleted = [];
    newArr = (symbol === "$")? arr.map(item => "$" + item): arr;

    for (let i = 0; i < newArr.length; i += 4) {
        converted.push(newArr.slice(i, i + 4));
    }
    
    converted.forEach(item => finlaArrayCompleted.push(strPrase.concat(item.join(''))));
    return finlaArrayCompleted;
}


console.log(convertArray(array1,"frase prueba:","$")); // [ 'frase prueba:$1,000$2,000$3,000$4,000', 'frase prueba:$5,000' ]


