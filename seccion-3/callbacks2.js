/**
 * Problemas comunes con los callbacks
 *
 *
 * pueden llegar a ser demasiados y crear una indentacion hacia la derecha
 * demasiado grande y dificil de mantener, conocida comunmente como la escalera de la muerte
 */

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

let getEmpleado = (id, callback) => {
   //el callback se ejecuta como una funcion normal y puede pasarsele parametros
   let empleadoBD = empleados.find((empleado) => empleado.id === id);
   if (!empleadoBD) {
      //cuando los parametros no se mandan por nombre, se asignan segun el orden de declaracion,
      //por lo tanto aqui el string se pasa al error y el segundo parametro no existe
      callback(`No existe un empleado con el id ${id}`);
   } else {
      //y aca el error es null y el segundo parametro si existe
      callback(null, empleadoBD);
   }
};

let getSalario = (empleado, callback) => {
   let salarioDB = salarios.find((salario) => salario.id === empleado.id);

   if (!salarioDB) {
      callback(`No existe un salario para el empleado ${empleado.nombre}`);
   } else {
      callback(null, {
         nombre: empleado.nombre,
         salario: salarioDB.salario,
         id: empleado.id
      });
   }
};

getEmpleado(3, (err, empleado) => {
   if (err) {
      return console.log(err);
   }

   getSalario(empleado, (err, resp) => {
      if (err) {
         return console.log(err);
      }
      console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);
   });
});
