const items = [1,3,2,3];

const rta = items.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
},{});

console.log(rta);

/*
en el caso anterior la idea es hacer un objeto que nos diga cuantas vecees se repite cada una
de los elementos del array (es un histograma de frecuencia).
    if(!obj[item]) {
        obj[item] = 1; 
esta parte de codigo verifica si el indice que esta mirando existe o no en el objeto. Si No existte entonces
lo inicializa.

    else {
            obj[item] = obj[item] + 1;
        }
en esta otra parte (else) lo que hace es que si el elemento ya existe, entonces aumenta las veces
que lo encuentre en el array.
*/

const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

  /*
  en este ejemplo podemos ver como se pueden combinar .map y .reduce de una manera que se llama
  pipelines, donde la salida de uno es la entrada del otro.
  */

  const niveles = data
    .map( item => item.level)
    .reduce((obj, item) => {
        if(!obj[item]) {
            obj[item] = 1;
        } else {
            obj[item] = obj[item] + 1;
        }
        return obj;
    },{});

    console.log(niveles);

  