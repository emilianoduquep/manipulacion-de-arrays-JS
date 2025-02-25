/*
    El objetivo es encontrar si hay almenos un numero par en el array
*/
const numbers = [1,1,3,3,5];

// usando el for normal
let rta = false;

for (let i = 0; i < numbers.length; i++) {
    if((numbers[i] % 2) === 0) {
        rta = true;
        break;
    }
}
console.log("Rta1: ",rta);

/*
    ahora vamos a usar el .some
*/

const rta2 = numbers.some( item => item % 2 === 0);
console.log("Rta2: ",rta2)


/*
    ahora vamos a ver como lo hariamos usando un objeto
*/

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 2322,
        delivered: false,
      },
  ];

  const entregas = orders.some(item => item.delivered % 2 === 0);
  console.log("Entregas: ",entregas);
