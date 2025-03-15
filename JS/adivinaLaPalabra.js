const palabraSecreta = "javascript";
let progreso = "_".repeat(palabraSecreta.length).split(""); // ["_", "_", ...]

const progresoDiv = document.getElementById("progreso");
const inputLetra = document.getElementById("letra");
const botonAdivinar = document.getElementById("adivinar");

// Actualizar la vista
function actualizarProgreso() {
    progresoDiv.textContent = progreso.join(" ");
}

// Adivinar
botonAdivinar.addEventListener("click", () => {
    const letra = inputLetra.value.toLowerCase();
    inputLetra.value = ""; // Limpiar el input

    if (letra && letra.length === 1) {
        if (palabraSecreta.includes(letra)) {
            for (let i = 0; i < palabraSecreta.length; i++) {
                if (palabraSecreta[i] === letra) {
                    progreso[i] = letra;
                }
            }
        }
    }

    // Actualizaa la interfaz
    actualizarProgreso();

    if (progreso.join("") === palabraSecreta) {
        alert("¡Felicidades! Has adivinado la palabra.");
        botonAdivinar.disabled = true;
    }
});

// Mostrar el progreso inicial
actualizarProgreso();
