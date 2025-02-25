/*
este metodo me permite reducir algo a una  sola expresion 
*/

let sum = 0;
const totals = [1,2,3,4];
for (let index = 0; index < totals.length; index++ ){
    const element = totals[index];
    sum = sum + element;
}
console.log("Suma total: ", sum);

/*
ahora vamos a usar el metodo reduce
se utiliza un acumulador
.reduce((acumulador, iterador) => "aca colocamos las operaciones que necesitemos", valor inicial del acumulador )
*/

const rta = totals.reduce((acumulador, iterador) => acumulador + iterador, 0);
console.log(rta);

/*
explicacion:
se necesitan dos parametros
el primer parametro es un callback y el segundo parametro es el estado inicial de acumulador.
*/