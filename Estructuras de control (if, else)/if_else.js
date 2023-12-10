// Función para verificar paridad
function verificarParidad(numero) {
    return (numero % 2 === 0) ? "El número es par." : "El número es impar.";
}

// Ejemplos de uso 
console.log(verificarParidad(4));
console.log(verificarParidad(7));

// Ejemplo de uso para calificaciones
var calificacion = 85;

if (calificacion >= 90) {
    console.log("A");
} else if (calificacion >= 80) {
    console.log("B");
} else if (calificacion >= 70) {
    console.log("C");
} else {
    console.log("Reprobado");
}

// Ejemplo de uso para verificar la edad
var edad = 15;
console.log((edad >= 18) ? "Eres mayor de edad." : "Eres menor de edad.");
