class Juego {
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "./images/fondo.png";

    this.niñoBuenoObj = new NiñoBueno();
    this.niñoDardoObj = new NiñoDardo();
    this.frames = 0;
    this.isGameOn = true;
  }


  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.w, canvas.h);
  };
  
  gameLoop = () => {
    this.frames = this.frames + 1;
    // limpiar
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // acciones
  this.niñoBuenoObj.correNiño()
    //dibujar
    this.drawFondo();
    this.niñoBuenoObj.drawNiñoBueno();
    this.niñoDardoObj.drawNiñoDardo();
  
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}


