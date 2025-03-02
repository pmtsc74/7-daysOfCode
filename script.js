// Generar un número aleatorio entre 0 y 10
const numeroCorrecto = Math.floor(Math.random() * 11);
let intentos = 3;

// Elementos del DOM
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const resultDiv = document.getElementById("result");

guessButton.addEventListener("click", () => {
  const numeroUsuario = parseInt(guessInput.value);

  if (isNaN(numeroUsuario) || numeroUsuario < 0 || numeroUsuario > 10) {
    resultDiv.textContent = "Por favor, ingresa un número válido entre 0 y 10.";
    return;
  }

  if (numeroUsuario === numeroCorrecto) {
    resultDiv.textContent = "¡Felicidades! Adivinaste el número.";
    guessButton.disabled = true;
  } else {
    intentos--;
    if (intentos > 0) {
      resultDiv.textContent = `Incorrecto. Te quedan ${intentos} intentos.`;
    } else {
      resultDiv.textContent = `¡Agotaste tus intentos! El número correcto era ${numeroCorrecto}.`;
      guessButton.disabled = true;
    }
  }

  guessInput.value = ""; // Limpiar el campo de entrada
});