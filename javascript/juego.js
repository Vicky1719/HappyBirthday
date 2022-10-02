class Juego {
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "./images/fondo.png";

    this.NiñoBuenoObj = new NiñoBueno();
    this.NiñoDardoObj = new NiñoDardo();
    this.isGameOn = true;
  }
}

drawFondo = () => {
  ctx.drawImage(this.fondo, 0, 0, canvas.w, canvas.h);
};

gameLoop = () => {
  // limpiar

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // acciones

  //dibujar
  this.drawFondo();
  this.NiñoBuenoObj.drawNiñoBueno();
  this.NiñoDardoObj.drawNiñoDardo();

  if (this.isGameOn === true) {
    requestAnimationFrame(this.gameLoop);
  }
};
