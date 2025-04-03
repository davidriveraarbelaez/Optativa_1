/* 
¿Qué es una clase?

Una clase es un molde para crear 
objetos. Es una forma de agrupar datos
 y funciones que operan sobre esos 
 datos en una sola entidad. 
 
 En JavaScript, las clases son una 
 forma de crear objetos y definir su 
 comportamiento.
*/

class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }   
}

// Crear objetos (Instancias)
// Para usar una clase, se debe crear una instancia (un objeto 
// específico basado en esa clase).

const persona1 = new Persona("Juan", 30);
personal1.saludar(); // Hola, mi nombre es Juan y tengo 30 años.

// Métodos y this
// Los métodos son funciones definidas dentro de una clase.
// La palabra clave this hace referencia al objeto actual.

class Perro{
    constructor(nombre, raza){
        this.nombre = nombre;
        this.raza = raza;
    }
    
    ladrar(){
        console.log(`${this.nombre} dice: ¡Guau!`);
    }
}

// Herencia entre clases
// Una clase puede exteneder otra para heredar sus propiedades y métodos.
// Esto se hace utilizando la palabra clave extends.

class Estudiante extends Persona{
    constructor(nombre, edad, carrera){
        super(nombre, edad); // Llama al constructor de la clase padre
        this.carrera = carrera;
    }
    
    estudiar(){
        console.log(`${this.nombre} está estudiando ${this.carrera}.`);
    }
}

/* Buenas prácticas
- Nombres de clases en PascalCase (ej. MiClase).
- Nombres de métodos en camelCase (ej. miMetodo).
- Métodos con nombres descriptivos.
- Métodos con verbos: saludar(), calcularEdad(), etc.
- Propiedades con nombres descriptivos.
- Utilizar const para instancias si no vamos a redefinirlas.
- Separar responsabilidades: una clase debe tener una única responsabilidad.
- Evitar clases con demasiadas propiedades o métodos.
*/

/*
Ejercicios prácticos:

1. Crear una clase Libro con propiedades como título, autor y año de publicación. Agregar un método
   para mostrar la información del libro.
   2. Crear una clase Estudiante que herede de Persona y tenga una propiedad adicional llamada
   carrera. Agregar un método para mostrar la información del estudiante.
   3. Crear una clase CuentaBancaria con métodos depositar(), retirar() y consultarSaldo().


*/