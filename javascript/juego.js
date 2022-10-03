class Juego {
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "./images/fondo.png";

    this.niñoBuenoObj = new NiñoBueno();

    this.niñoDardoArr = [];
    this.globoArr = [];
    this.frames = 0;
    this.isGameOn = true;
  }

  dardoChoque = () => {
    this.niñoDardoArr.forEach((eachDardo) => {
      if (
        this.niñoBuenoObj.x < eachDardo.x + eachDardo.w &&
        this.niñoBuenoObj.x + this.niñoBuenoObj.w > eachDardo.x &&
        this.niñoBuenoObj.y < eachDardo.y + eachDardo.h &&
        this.niñoBuenoObj.h + this.niñoBuenoObj.y > eachDardo.y
      ) {
        this.gameOver();
      }
    });
  };

  globoChoque = () => { 
    for (let i = 0; i < this.globoArr.length; i++) {
      let eachGlobo = this.globoArr[i];
    
      if (
        this.niñoBuenoObj.x < eachGlobo.x + eachGlobo.w &&
        this.niñoBuenoObj.x + this.niñoBuenoObj.w > eachGlobo.x &&
        this.niñoBuenoObj.y < eachGlobo.y + eachGlobo.h &&
        this.niñoBuenoObj.h + this.niñoBuenoObj.y > eachGlobo.y
      ) {
    
        this.gameScore();
        this.globoArr.splice(i, 1)
        break;
      }
    }
  };

  gameOver = () => {
    this.isGameOn = false;

    canvas.style.display = "none";

    gameOverScreen.style.display = "flex";
  };

  gameScore = () => {
    if (this.globoChoque === true) {
      this.score++;
    }
  };

  addDardo = () => {
    if (this.frames % 60 === 0) {
      let randomNum = Math.random() * 50;
      let randomXint = Math.floor(randomNum);

      let nuevoDardo = new NiñoDardo(randomXint);
      this.niñoDardoArr.push(nuevoDardo);
    }
  };

  addGlobo = () => {
    if (this.frames % 120 === 0) {
      let randomNum2 = Math.random() * 30;
      let randomXint2 = Math.floor(randomNum2);

      let nuevoGlobo = new Globo(randomXint2);
      this.globoArr.push(nuevoGlobo);
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

    this.niñoDardoArr.forEach((eachDardo) => {
      eachDardo.caminarNiñoDardo();
    });
    this.addDardo();

    this.globoArr.forEach((eachGlobo) => {
      eachGlobo.flotarGlobo();
    });
    this.addGlobo();

    this.dardoChoque();
    this.globoChoque();

    //dibujar
    this.drawFondo();
    this.niñoBuenoObj.drawNiñoBueno();

    this.niñoDardoArr.forEach((eachDardo) => {
      eachDardo.drawNiñoDardo();
    });

    this.globoArr.forEach((eachGlobo) => {
      eachGlobo.drawGlobo();
    });

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
