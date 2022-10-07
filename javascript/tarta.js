class Tarta {
  constructor() {
    // propiedades de la tarta
    this.img = new Image();
    this.img.src = "./images/tartaVelas.png";
    this.x = Math.random() * canvas.width;
    this.y = 0;
    this.w = 60;
    this.h = 80;
    this.speed = 3;
  }

  drawTarta = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  volarTarta = () => {
    this.y = this.y + this.speed;
  };
}
