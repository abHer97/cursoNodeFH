const argv = require('./config/yargs').argv;

const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
   case 'listar':
      listarTabla(argv.base, argv.limite);
      break;
   case 'crear':
      crearArchivo(argv.base, argv.limite)
         .then((archivo) => console.log(`Archivo creado: ${archivo.green}`))
         .catch((err) => console.log(err));
      break;
   default:
      console.log('comando no reconocido');
      break;
}

console.log(argv);

// let argv2 = process.argv;

// console.log(argv2);

// process.argv obtiene todos los argumentos que son enviados por consola.
// el primero es la ruta de node y el segundo es la ruta del archivo que esta corriendo
/*let parametro = argv[2];*/
// asi que cuando mandamos un parametro se guarda en la tercera posicion
/*let base = parametro.split('=')[1];*/
// mientras se mande con dos guiones'--'texto'='numero
// no importa el texto que se escriba ya que buscara el igual para tomar el siguiente numero
// y continuar el codigo lo cual es causa de interminables validaciones y para eso esta yargs

// console.log(base);
