// variables globales
const canvas = document.querySelector("#mi-canvas");
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
};
// event listeners

startBtn.addEventListener("click", empezarJuego);

window.addEventListener("keydown", (event) => {
    if(event.code === "ArrowLeft") {
juegoObj.niñoBuenoObj.moverIzquierda()
    }
    if(event.code === "ArrowRight") {
juegoObj.niñoBuenoObj.moverDerecha()
    }
    if(event.code === "ArrowUp") {
        juegoObj.niñoBuenoObj.moverArriba()
    }
    if(event.code === "ArrowDown") {
juegoObj.niñoBuenoObj.moverAbajo()
    }
})


