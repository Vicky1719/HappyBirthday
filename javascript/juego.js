class Juego {
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "./images/canvas.png";

    this.niñoBuenoObj = new NiñoBueno();

    this.niñoDardoArr = [];
    this.globoArr = [];
    this.glotonArr = [];
    this.tartaArr = [];
    this.traviesoArr = [];
    this.regaloArr = [];
    this.grandeArr = [];
    this.grande1Arr = [];
    this.grande2Arr = [];
    this.frames = 0;
    this.isGameOn = true;
    this.scoreOne = 0;
    this.scoreTwo = 0;
    this.scoreThree = 0;
  }

  dardoChoque = () => {
    this.niñoDardoArr.forEach((eachDardo) => {
      if (
        this.niñoBuenoObj.x < eachDardo.x + eachDardo.w &&
        this.niñoBuenoObj.x + this.niñoBuenoObj.w > eachDardo.x &&
        this.niñoBuenoObj.y < eachDardo.y + eachDardo.h &&
        this.niñoBuenoObj.h + this.niñoBuenoObj.y > eachDardo.y
      ) {
        document.querySelector("#sonido-perder").play();
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
        document.querySelector("#sonido-ganar").play();
        this.scoreOne++;
        contadorOne.innerText = this.scoreOne;
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
        document.querySelector("#sonido-ganar").play();
        this.scoreTwo++;
        contadorTwo.innerText = this.scoreTwo;
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
        document.querySelector("#sonido-perder").play();
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
        document.querySelector("#sonido-perder").play();
        this.gameOver();
      }
    });
  };

  regaloChoque = () => {
    this.regaloArr.forEach((eachRegalo, index) => {
      if (
        this.niñoBuenoObj.x < eachRegalo.x + eachRegalo.w &&
        this.niñoBuenoObj.x + this.niñoBuenoObj.w > eachRegalo.x &&
        this.niñoBuenoObj.y < eachRegalo.y + eachRegalo.h &&
        this.niñoBuenoObj.h + this.niñoBuenoObj.y > eachRegalo.y
      ) {
        document.querySelector("#sonido-ganar").play();
        this.scoreThree++;
        contadorThree.innerText = this.scoreThree;
        this.regaloArr.splice(index, 1);
      }

      if (this.scoreThree === 2) {
        this.winner();
      }
    });
  };

  grandeChoque = () => {
    this.grandeArr.forEach((eachGrande) => {
      if (
        this.niñoBuenoObj.x < eachGrande.x + eachGrande.w &&
        this.niñoBuenoObj.x + this.niñoBuenoObj.w > eachGrande.x &&
        this.niñoBuenoObj.y < eachGrande.y + eachGrande.h &&
        this.niñoBuenoObj.h + this.niñoBuenoObj.y > eachGrande.y
      ) {
        document.querySelector("#sonido-perder").play();
        this.gameOver();
      }
    });
  };

  grande1Choque = () => {
    this.grande1Arr.forEach((eachGrande1) => {
      if (
        this.niñoBuenoObj.x < eachGrande1.x + eachGrande1.w &&
        this.niñoBuenoObj.x + this.niñoBuenoObj.w > eachGrande1.x &&
        this.niñoBuenoObj.y < eachGrande1.y + eachGrande1.h &&
        this.niñoBuenoObj.h + this.niñoBuenoObj.y > eachGrande1.y
      ) {
        document.querySelector("#sonido-perder").play();
        this.gameOver();
      }
    });
  };

  grande2Choque = () => {
    this.grande2Arr.forEach((eachGrande2) => {
      if (
        this.niñoBuenoObj.x < eachGrande2.x + eachGrande2.w &&
        this.niñoBuenoObj.x + this.niñoBuenoObj.w > eachGrande2.x &&
        this.niñoBuenoObj.y < eachGrande2.y + eachGrande2.h &&
        this.niñoBuenoObj.h + this.niñoBuenoObj.y > eachGrande2.y
      ) {
        document.querySelector("#sonido-perder").play();
        this.gameOver();
      }
    });
  };

  gameOver = () => {
    this.isGameOn = false;

    canvas.style.display = "none";

    gameOverScreen.style.display = "flex";
  };

  winner = () => {
    this.isGameOn = false;

    canvas.style.display = "none";

    winnerScreen.style.display = "flex";
  };

  addDardo = () => {
    if (this.scoreOne <= 1) {
      if (this.frames % 60 === 0) {
        let randomNum = Math.random() * 50;
        let randomXint = Math.floor(randomNum);

        let nuevoDardo = new NiñoDardo(randomXint);
        this.niñoDardoArr.push(nuevoDardo);
      }
    }
  };

  addGlobo = () => {
    if (this.scoreOne <= 1) {
      if (this.frames % 60 === 0) {
        let randomNum2 = Math.random() * 30;
        let randomXint2 = Math.floor(randomNum2);

        let nuevoGlobo = new Globo(randomXint2);
        this.globoArr.push(nuevoGlobo);
      }
    }
  };

  addTarta = () => {
    if (this.scoreOne >= 2 && this.scoreOne <= 3) {
      if (this.frames % 60 === 0) {
        let randomNum3 = Math.random() * 30;
        let randomXint3 = Math.floor(randomNum3);

        let nuevaTarta = new Tarta(randomXint3);
        this.tartaArr.push(nuevaTarta);
      }
      this.globoArr.splice(0, this.globoArr.length);
      this.niñoDardoArr.splice(0, this.niñoDardoArr.length);
      this.grandeArr.splice(0, this.grandeArr.length);
      this.grande1Arr.splice(0, this.grande1Arr.length);
    }
  };

  addNiñoGloton = () => {
    if (this.scoreOne >= 2 && this.scoreOne <= 3) {
      if (this.frames % 60 === 0) {
        let randomNum4 = Math.random() * 50;
        let randomXint4 = Math.floor(randomNum4);

        let nuevoNiñoGloton = new NiñoGloton(randomXint4);
        this.glotonArr.push(nuevoNiñoGloton);
      }
    }
  };

  addNiñoTravieso = () => {
    if (this.scoreTwo >= 2 && this.scoreTwo <= 3) {
      if (this.frames % 60 === 0) {
        let randomNum5 = Math.random() * 50;
        let randomXint5 = Math.floor(randomNum5);

        let nuevoNiñoTravieso = new NiñoTravieso(randomXint5);
        this.traviesoArr.push(nuevoNiñoTravieso);
      }
      this.tartaArr.splice(0, this.tartaArr.length);
      this.glotonArr.splice(0, this.glotonArr.length);
      this.grande2Arr.splice(0, this.grande2Arr.length);
    }
  };

  addRegalo = () => {
    if (this.scoreTwo >= 2 && this.scoreTwo <= 3) {
      if (this.frames % 60 === 0) {
        let randomNum6 = Math.random() * 50;
        let randomXint6 = Math.floor(randomNum6);

        let nuevoRegalo = new Regalo(randomXint6);
        this.regaloArr.push(nuevoRegalo);
      }
    }
  };

  addNiñoGrande = () => {
    if (this.scoreOne <= 1) {
      if (this.frames % 180 === 0) {
        let nuevoNiñoGrande = new NiñoGrande("lado");
        this.grandeArr.push(nuevoNiñoGrande);
      }
    }
  };

  addNiñoGrande1 = () => {
    if (this.scoreOne <= 1) {
      if (this.frames % 120 === 0) {
        let nuevoNiñoGrande1 = new NiñoGrande("arriba");
        this.grande1Arr.push(nuevoNiñoGrande1);
      }
    }
  };

  addNiñoGrande2 = () => {
    if (this.scoreOne >= 2 && this.scoreOne <= 3) {
      if (this.frames % 180 === 0) {
        let nuevoNiñoGrande2 = new NiñoGrande("loco");
        this.grande2Arr.push(nuevoNiñoGrande2);
      }
    }
  };

  borrarRegalo = () => {
    setInterval(() => {
      this.regaloArr.forEach((eachRegalo, index) => {
        this.regaloArr.splice(index, 1);
      });
    }, 4000);
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

    this.grandeArr.forEach((eachGrande) => {
      eachGrande.molestarNiñoGrande1();
    });
    this.addNiñoGrande();

    this.grande1Arr.forEach((eachGrande1) => {
      eachGrande1.molestarNiñoGrande2();
    });
    this.addNiñoGrande1();

    this.grande2Arr.forEach((eachGrande2) => {
      eachGrande2.locoChoque();
    });
    this.addNiñoGrande2();

    this.addRegalo();

    this.dardoChoque();
    this.globoChoque();
    this.tartaChoque();
    this.glotonChoque();
    this.traviesoChoque();
    this.regaloChoque();
    this.grandeChoque();
    this.grande1Choque();
    this.grande2Choque();

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

    this.regaloArr.forEach((eachRegalo) => {
      eachRegalo.drawRegalo();
    });

    this.grandeArr.forEach((eachGrande) => {
      eachGrande.drawNiñoGrande();
    });

    this.grande1Arr.forEach((eachGrande1) => {
      eachGrande1.drawNiñoGrande();
    });

    this.grande2Arr.forEach((eachGrande2) => {
      eachGrande2.drawNiñoGrande();
    });

    //recursion
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
