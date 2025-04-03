/*
Closures: SOn funciones que recuerdan el entorno en el que fueron creadas,
incluso después de que el contexto original haya desaparecido.

En pocas palabras, un closure es una función que tiene acceso a su propio
ámbito, al ámbito externo y al ámbito global. 
*/

function saludar(saludo){
    return function(nombre){
        console.log(saludo + " " + nombre);     
    }
}

const saludarHola = saludar("Hola");
saludarHola("Juan"); // Hola Juan

// Closure que ilustra cómo se puede utilizar para crear una 
// variable privada.

function contador(){
    let cuenta = 0;

    return function(){
        cuenta++;
        return cuenta;
    }
}