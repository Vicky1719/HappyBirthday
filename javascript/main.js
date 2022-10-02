// variables globales
const canvas = document.querySelector("mi-canvas");
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector("#pantalla-inicial");
const startBtn = document.querySelector("#start-btn");
const gameOverScreen = document.querySelector("#pantalla-final");

let juegoObj;
// funciones

const empezarJuego = () => {

    startScreen.style.display ="none";
    canvas.style.display ="block";

    juegoObj = new Juego();
    juegoObj.gameLoop();
}
// event listeners

startBtn.addEventListener("click", empezarJuego);

