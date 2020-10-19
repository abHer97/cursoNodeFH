/**
 * Async Await
 */

//una funcion asincrona devuelve una promesa
// let getNombre = async () => {
//    return 'Abel';
// };
// console.log(getNombre());

let getNombre = () => {
   return new Promise((res, rej) => {
      setTimeout(() => {
         res('Abel');
      }, 3000);
   });
};

let saludo = async () => {
   let nombre = await getNombre();
   return `Hola ${nombre}`;
};

saludo().then((mensaje) => {
   console.log(mensaje);
});

// getNombre()
//    .then((nombre) => {
//       console.log(nombre);
//    })
//    .catch((err) => {
//       console.log('Ha ocurrido un error en Asyc', err);
//    });
