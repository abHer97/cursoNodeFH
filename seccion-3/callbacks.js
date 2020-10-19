/**
 * un callback es una funcion que se pasa por parametro a otra funcion para ejecutar
 * determinada accion. El ejemplo mas sencillo es el timeout
 */
// setTimeout(() => {
//    console.log('Hola mundo')
// }, 3000);
let getUsuarioById = (id, callback) => {
   let usuario = {
      nombre: 'Abel',
      id
   };

   if (id === 20) {
      return callback(`El usuario con el id ${id} no existe en la BD`);
   } else {
      return callback(null, usuario);
   }
};

getUsuarioById(10, (err, usuario) => {
   if (err) {
      return console.log(err);
   }
   console.log('Usuario de base de datos', usuario);
});
