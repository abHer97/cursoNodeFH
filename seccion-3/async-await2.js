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
   let empleadoBD = empleados.find((empleado) => empleado.id === id);

   if (!empleadoBD) {
      throw new Error(`No existe un empleado con el id ${id}`);
   } else {
      return empleadoBD;
   }
};

let getSalario = (empleado) => {
   let salarioDB = salarios.find((salario) => salario.id === empleado.id);

   if (!salarioDB) {
      throw new Error(`No existe un salario para el empleado ${empleado.nombre}`);
   } else {
      return {
         nombre: empleado.nombre,
         salario: salarioDB.salario,
         id: empleado.id
      };
   }
};

let getInformacion = (id) => {
   let empleado = getEmpleado(id);

   let respuesta = getSalario(empleado);

   return `${respuesta.nombre} tiene un salario de $${respuesta.salario}`;
};

getInformacion(3)
   .then((mensaje) => {
      console.log(mensaje);
   })
   .catch((err) => {
      console.log(err);
   });
