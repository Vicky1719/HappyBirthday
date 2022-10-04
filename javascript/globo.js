class Globo {
  constructor() {
    // propiedades del globo
    this.img = new Image();
    this.img.src = "./images/globo.png";

    this.x = 600;
    this.y = Math.random() * canvas.height;
    this.w = 30;
    this.h = 25;
    this.speed = 3;
  }

  drawGlobo = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  flotarGlobo = () => {
    this.x = this.x - this.speed;
  };
}
