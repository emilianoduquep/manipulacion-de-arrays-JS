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
  ];
  console.log("original", orders);
  const rta = orders.map((item) => item.total);
  console.log("rta", rta);
  
  //Que pasa si quiero agregar un nuevo atributo a al objeto original?
//   const rta2 = orders.map((item) => {
//     item.tax = 0.19;
//     return item;
//   });
//   console.log("rta2", rta2);
//   console.log("original", orders);
  /*
  Esta es la salida del codigo anterior. Aunque map es un metodo inmutable, podemos ver aca que 
  si modifico el archiov original. Esto lo hace porque .map genera una referencia en memoria al objeto.
    rta2 [
  { customerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 },
  { customerName: 'Zulema', total: 120, delivered: false, tax: 0.19 },
  { customerName: 'Santiago', total: 180, delivered: true, tax: 0.19 },
  { customerName: 'Valentina', total: 240, delivered: true, tax: 0.19 }
]
original [
  { customerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 },
  { customerName: 'Zulema', total: 120, delivered: false, tax: 0.19 },
  { customerName: 'Santiago', total: 180, delivered: true, tax: 0.19 },
  { customerName: 'Valentina', total: 240, delivered: true, tax: 0.19 }
]
  */

  /*
  Para poder respetar el array original lo que se debe hacer es lo siguiente
   */
  const rta3 = orders.map((item) => {
    return {
      ...item, // spread operator
      tax: 0.19,
    };
  });
  console.log("rta3", rta3);
  console.log("original", orders);
 