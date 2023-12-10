// para esto vamos a utilizar JS y HTML 

// Número aleatorio entre 1 y 10
var numeroSecreto = Math.floor(Math.random() * 10) + 1;
var intentos = 0;

function adivinarNumero() {
    // Obtener el valor ingresado por el usuario
    var guess = document.getElementById("guessInput").value;
 

    // Incrementar el contador de intentos
    intentos++;

    // Comparar el número ingresado con el número secreto
    if (parseInt(guess) === numeroSecreto) {
        document.getElementById("resultado").innerHTML = "¡Correcto! Has adivinado el número " + numeroSecreto + " en " + intentos + " intentos.";
    } else {
        document.getElementById("resultado").innerHTML = "Incorrecto. Intenta nuevamente.";
    }
}
//es un juego simple pero practico para las personas que esten iniciando 