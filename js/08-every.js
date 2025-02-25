/*
    en este caso, every prueba que todos los elementos cumplen con la condicion
*/
const numbers = [40, 40, 40, 38] // aca voy a buscar si todos lo elementos son menores 40
let rta = true;
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 40){
        rta = false;
        break;
    }
}
console.log("Rta: ", rta);

/*
ahora vamos a porbar usando con every
*/

const rta2 = numbers.every(item => item <= 40);
console.log("Rta2", rta2);

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  const rta3 = team.every(item => item.age >= 15);
  console.log("Rta3:", rta3);