class Juego {
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "./images/fondo.png";

    this.niñoBuenoObj = new NiñoBueno();

    this.niñoDardoArr = [];
    this.globoArr = [];
    this.glotonArr = [];
    this.tartaArr = [];
    this.traviesoArr = [];
    this.frames = 0;
    this.isGameOn = true;
    this.score = 0;
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
    this.globoArr.forEach((eachGlobo, index) => {
      if (
        this.niñoBuenoObj.x < eachGlobo.x + eachGlobo.w &&
        this.niñoBuenoObj.x + this.niñoBuenoObj.w > eachGlobo.x &&
        this.niñoBuenoObj.y < eachGlobo.y + eachGlobo.h &&
        this.niñoBuenoObj.h + this.niñoBuenoObj.y > eachGlobo.y
      ) {
        this.score++;
        this.globoArr.splice(index, 1);
      }
    });
  };

  tartaChoque = () => {
    this.tartaArr.forEach((eachTarta, index) => {
      if (
        this.niñoBuenoObj.x < eachTarta.x + eachTarta.w &&
        this.niñoBuenoObj.x + this.niñoBuenoObj.w > eachTarta.x &&
        this.niñoBuenoObj.y < eachTarta.y + eachTarta.h &&
        this.niñoBuenoObj.h + this.niñoBuenoObj.y > eachTarta.y
      ) {
        this.score++;
        this.tartaArr.splice(index, 1);
      }
    });
  };

  glotonChoque = () => {
    this.glotonArr.forEach((eachGloton) => {
      if (
        this.niñoBuenoObj.x < eachGloton.x + eachGloton.w &&
        this.niñoBuenoObj.x + this.niñoBuenoObj.w > eachGloton.x &&
        this.niñoBuenoObj.y < eachGloton.y + eachGloton.h &&
        this.niñoBuenoObj.h + this.niñoBuenoObj.y > eachGloton.y
      ) {
        this.gameOver();
      }
    });
  };

  traviesoChoque = () => {
    this.traviesoArr.forEach((eachTravieso) => {
      if (
        this.niñoBuenoObj.x < eachTravieso.x + eachTravieso.w &&
        this.niñoBuenoObj.x + this.niñoBuenoObj.w > eachTravieso.x &&
        this.niñoBuenoObj.y < eachTravieso.y + eachTravieso.h &&
        this.niñoBuenoObj.h + this.niñoBuenoObj.y > eachTravieso.y
      ) {
        this.gameOver();
      }
    });
  };

  gameOver = () => {
    this.isGameOn = false;

    canvas.style.display = "none";

    gameOverScreen.style.display = "flex";
  };

  addDardo = () => {
    if (this.score <= 1) {
      if (this.frames % 60 === 0) {
        let randomNum = Math.random() * 50;
        let randomXint = Math.floor(randomNum);

        let nuevoDardo = new NiñoDardo(randomXint);
        this.niñoDardoArr.push(nuevoDardo);
      }
    }
  };

  addGlobo = () => {
    if (this.score <= 1) {
      if (this.frames % 60 === 0) {
        let randomNum2 = Math.random() * 30;
        let randomXint2 = Math.floor(randomNum2);

        let nuevoGlobo = new Globo(randomXint2);
        this.globoArr.push(nuevoGlobo);
      }
    }
  };

  addTarta = () => {
    if (this.score >= 2 && this.score <= 3) {
      if (this.frames % 60 === 0) {
        let randomNum3 = Math.random() * 30;
        let randomXint3 = Math.floor(randomNum3);

        let nuevaTarta = new Tarta(randomXint3);
        this.tartaArr.push(nuevaTarta);
      }
      this.globoArr.splice(0, this.globoArr.length);
      this.niñoDardoArr.splice(0, this.niñoDardoArr.length);
    }
  };

  addNiñoGloton = () => {
    if (this.score >= 2 && this.score <= 3) {
      if (this.frames % 60 === 0) {
        let randomNum4 = Math.random() * 50;
        let randomXint4 = Math.floor(randomNum4);

        let nuevoNiñoGloton = new NiñoGloton(randomXint4);
        this.glotonArr.push(nuevoNiñoGloton);
      }
    }
  };

  addNiñoTravieso = () => {
    if (this.score >= 4) {
      if (this.frames % 60 === 0) {
        let randomNum5 = Math.random() * 50;
        let randomXint5 = Math.floor(randomNum5);

        let nuevoNiñoTravieso = new NiñoTravieso(randomXint5);
        this.traviesoArr.push(nuevoNiñoTravieso);
      }
      this.tartaArr.splice(0, this.tartaArr.length);
      this.glotonArr.splice(0, this.glotonArr.length);
    }
  };

  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.w, canvas.h);
  };
  //contador-one = `Score: ${this.score}`;

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

    this.glotonArr.forEach((eachGloton) => {
      eachGloton.comerNiñoGloton();
    });
    this.addNiñoGloton();

    this.tartaArr.forEach((eachTarta) => {
      eachTarta.volarTarta();
    });
    this.addTarta();

    this.traviesoArr.forEach((eachTravieso) => {
      eachTravieso.correrNiñoTravieso();
    });
    this.addNiñoTravieso();

    this.dardoChoque();
    this.globoChoque();
    this.tartaChoque();
    this.glotonChoque();
    this.traviesoChoque();

    //dibujar
    this.drawFondo();
    this.niñoBuenoObj.drawNiñoBueno();

    this.niñoDardoArr.forEach((eachDardo) => {
      eachDardo.drawNiñoDardo();
    });

    this.globoArr.forEach((eachGlobo) => {
      eachGlobo.drawGlobo();
    });

    this.glotonArr.forEach((eachGloton) => {
      eachGloton.drawNiñoGloton();
    });

    this.tartaArr.forEach((eachTarta) => {
      eachTarta.drawTarta();
    });

    this.traviesoArr.forEach((eachTravieso) => {
      eachTravieso.drawNiñoTravieso();
    });

    //recursion
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
