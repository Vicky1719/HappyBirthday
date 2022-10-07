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
  };
  moverAbajo = () => {
    this.y = this.y + this.speed;
  };
  moverDerecha = () => {
    this.x = this.x + this.speed;
  };

  moverIzquierda = () => {
    this.x = this.x - this.speed;
  };
}
