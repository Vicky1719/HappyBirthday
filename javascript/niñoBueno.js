class NiñoBueno {
  constructor() {
    // propiedades del niñoBueno
    this.img = new Image();
    this.img.src = "./images/yo.png";
    this.x = 50;
    this.y = 50;
    this.w = 70;
    this.h = 60;
    this.speed = 5;
  }

  drawNiñoBueno = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  moverArriba = () => {
    this.y = this.y - this.speed;
    if (this.y <= 0) {
      this.y = 0;
    }
  };
  moverAbajo = () => {
    this.y = this.y + this.speed;
    if (this.y >= 750) {
      this.y = 750;
    }
  };
  moverDerecha = () => {
    this.x = this.x + this.speed;
    if (this.x >= 950) {
      this.x = 950;
    }
  };

  moverIzquierda = () => {
    this.x = this.x - this.speed;
    if (this.x <= 0) {
      this.x = 0;
    }
  };
}
