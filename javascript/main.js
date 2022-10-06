// variables globales
const canvas = document.querySelector("#mi-canvas");
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector("#pantalla-inicial");
const startBtn = document.querySelector("#start-btn");
const gameOverScreen = document.querySelector("#pantalla-final");
const winnerScreen = document.querySelector("#pantalla-ganar");
const restartBtn = document.querySelector("#restart-btn");
const contadorOne = document.querySelector("#globos");
const contadorTwo = document.querySelector("#tartas");
const contadorThree = document.querySelector("#regalos");
const contadores = document.querySelector("#contadores");
let juegoObj;

// funciones

const empezarJuego = () => {
  startScreen.style.display = "none";
  gameOverScreen.style.display = "none";
  winnerScreen.style.display = "none";
  canvas.style.display = "block";
  contadores.style.display = "flex";

  juegoObj = new Juego();
  juegoObj.gameLoop();
 juegoObj.borrarRegalo();
};


/*const reiniciar = () => {
  contadorOne.innerText = juegoObj.scoreOne
}*/
//startScreen = () => {
//contadorOne.style.display = "none"
//}



// event listeners

startBtn.addEventListener("click", empezarJuego);
restartBtn.addEventListener("click", empezarJuego);

window.addEventListener("keydown", (event) => {
  if (juegoObj.isGameOn === true) {
    if (event.code === "ArrowLeft") {
      juegoObj.niñoBuenoObj.moverIzquierda();
    }
    if (event.code === "ArrowRight") {
      juegoObj.niñoBuenoObj.moverDerecha();
    }
    if (event.code === "ArrowUp") {
      juegoObj.niñoBuenoObj.moverArriba();
    }
    if (event.code === "ArrowDown") {
      juegoObj.niñoBuenoObj.moverAbajo();
    }
  }
});
