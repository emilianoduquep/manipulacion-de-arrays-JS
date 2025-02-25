/*
Split me permite dividir un string por algo que quiera, ya sea un espacio en blanco, una coma, o lo
que sea. Esto me genera un array de elementos.
*/
const title = 'Curso de manipulación de arrays';

const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal); // ['Curso', 'de', 'manipulacion', 'de', 'arrays']