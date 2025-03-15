// Array de palabras // En un futuro una API de palabras.
const palabras = ["javascript", "python", "html", "css", "react", "node", "angular", "vue", "bootstrap", "php"];

const indiceAleatorio = Math.floor(Math.random() * palabras.length);

let palabraElegida = "";
// Bucle para elegir la palabra
for (let i = 0; i < palabras.length; i++) {
    if (i === indiceAleatorio) {
        palabraElegida = palabras[i];
        break;
    }
}

let intentosRestantes = 5;
let letrasIncorrectas = [];
let progreso = "_".repeat(palabraElegida.length).split(""); // ["_", "_", ...]

const progresoDiv = document.getElementById("progreso");
const inputLetra = document.getElementById("letra");
const botonAdivinar = document.getElementById("adivinar");
const vidasDiv = document.getElementById("vidas");
const incorrectasSpan = document.getElementById("incorrectas");

// Actualizar la vista
function actualizarProgreso() {
    progresoDiv.textContent = progreso.join(" ");
    vidasDiv.textContent = `Intentos restantes: ${intentosRestantes}`;
    incorrectasSpan.textContent = letrasIncorrectas.join(", ");
}

// Adivinar
botonAdivinar.addEventListener("click", () => {
    const letra = inputLetra.value.toLowerCase();
    inputLetra.value = "";

    if (letra && letra.length === 1) {
        if (palabraElegida.includes(letra)) {
            // Actualiza progreso si la letra es correcta
            for (let i = 0; i < palabraElegida.length; i++) {
                if (palabraElegida[i] === letra) {
                    progreso[i] = letra;
                }
            }
        } else if (!letrasIncorrectas.includes(letra)) {
            // Reducir intentos si es incorrecta
            intentosRestantes--;
            letrasIncorrectas.push(letra);
        }
    }

    // Actualizaa la interfaz
    actualizarProgreso();

    if (progreso.join("") === palabraElegida) {
        alert("¡Felicidades! Has adivinado la palabra.");
        botonAdivinar.disabled = true;
    } else if (intentosRestantes === 0) {
        alert(`¡Juego terminado! La palabra era "${palabraElegida}".`);
        botonAdivinar.disabled = true;
    }
});

// Mostrar el progreso inicial
actualizarProgreso();
