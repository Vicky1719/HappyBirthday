class Juego {
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "./images/fondo.png";

    this.niñoBuenoObj = new NiñoBueno();
    this.niñoDardoObj = new NiñoDardo();
    this.niñoDardoArr = [];
    this.frames = 0;
    this.isGameOn = true;
  }

  addDardo = () => {
    if (this.frames % 60 === 0) {

        let randomNum = Math.random() * 50;
        let randomXint = Math.floor(randomNum);

        let nuevoDardo = new NiñoDardo(randomXint)
        this.niñoDardoArr.push(nuevoDardo)
    }
  };


  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.w, canvas.h);
  };

  gameLoop = () => {
    this.frames = this.frames + 1;
    // limpiar

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // acciones
    this.niñoDardoObj.caminarNiñoDardo();
    this.niñoDardoArr.forEach((eachDardo) => {
      eachDardo.caminarNiñoDardo();
    });
    this.addDardo();

    //dibujar
    this.drawFondo();
    this.niñoBuenoObj.drawNiñoBueno();
    this.niñoDardoObj.drawNiñoDardo();
    this.niñoDardoArr.forEach((eachDardo) => {
      eachDardo.drawNiñoDardo();
    });

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
