console.log('Inicio del programa');

setTimeout(() => {
   console.log('Primer Timeout');
}, 3000);

setTimeout(() => {
   console.log('Segundo Timeout');
}, 0);

setTimeout(() => {
   console.log('Tercer Timeout');
}, 0);

console.log('Fin del programa');
/**
 * el anterior programa da como resultado
 *
 *    Inicio del programa
 *    Fin del programa
 *    Segundo Timeout
 *    Tercer Timeout
 *    Primer Timeout
 *
 * Esto sucede porque cuando se ejecuta node, lo que hace es crear el proceso main()
 * y empezar a ejecutar codigo linea por linea agregandola al CallStack o pila de procesos
 * y ejecuta una y la deshecha hasta acabar el codigo y terminar deshechando el proceso
 * main.
 *
 * Node tiene el CallStack, las Node Apis y la cola de procesos para mantener su ciclo de
 * vida. en este codigo cuando tenemos un timeout es registrado en CS pero no deshechado ya
 * que se debe esperar a que acabe. entonces cuando se ejecuta el timeout es enviado a la
 * pila de callbacks para ser ejecutados una vez que esten listos y despues deshecharlos.
 *
 * Una vez ejecutados todos los callbacks y deshechados, al fin termina nuestro proceso.
 *
 */
