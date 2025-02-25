/*
    Find va a devoler un solo item, en caso que lo encuentre, me envia el valor del numero que encontro.
    En caso de no encontrarla va a quedar undefined
*/




const numbers = [1,30,49,29,10,13];

let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 302323) {
    rta = element;
    break;
  }
}
console.log('for', rta);
const rta2 = numbers.find(item => item === 302323)
console.log('find', rta2);


const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const rta3 = products.find(item => item.id === '🍔')
console.log('find', rta3); // esto devuelve el elemento 
const rta4 = products.findIndex(item => item.id === '🍔')
console.log('findIndex', rta4); // esto devuelve la posicion donde se encuentra