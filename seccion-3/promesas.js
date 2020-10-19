let empleados = [
   {
      id: 1,
      nombre: 'Fernando'
   },
   {
      id: 2,
      nombre: 'Melissa'
   },
   {
      id: 3,
      nombre: 'Juan'
   }
];

let salarios = [
   {
      id: 1,
      salario: 1000
   },
   {
      id: 2,
      salario: 2000
   }
];

let getEmpleado = (id) => {
   return new Promise((resolve, reject) => {
      let empleadoBD = empleados.find((empleado) => empleado.id === id);

      if (!empleadoBD) {
         reject(`No existe un empleado con el id ${id}`);
      } else {
         resolve(empleadoBD);
      }
   });
};

let getSalario = (empleado) => {
   return new Promise((res, rej) => {
      let salarioDB = salarios.find((salario) => salario.id === empleado.id);

      if (!salarioDB) {
         rej(`No existe un salario para el empleado ${empleado.nombre}`);
      } else {
         res({
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
         });
      }
   });
};

//promesas anidadas
// getEmpleado(1)
//    .then((empleado) => {
//       console.log('Empleado de BD', empleado);
//       getSalario(empleado)
//          .then((salario) => {
//             console.log(
//                `El salario del empleado ${empleado.nombre} es $${salario.salario}`
//             );
//          })
//          .catch((err) => {
//             console.log(err);
//          });
//    })
//    .catch((err) => {
//       console.log(err);
//    });

//promesas en cadena
getEmpleado(2)
   .then((empleado) => {
      return getSalario(empleado);
   })
   .then((resp) => {
      console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);
   })
   .catch((err) => console.log(err));
