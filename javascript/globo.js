class Globo {
  constructor() {
    // propiedades del globo
    this.img = new Image();
    this.img.src = "./images/globoRosa.png";

    this.x = 1000;
    this.y = Math.random() * canvas.height;
    this.w = 60;
    this.h = 80;
    this.speed = 3;
  }

  drawGlobo = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  flotarGlobo = () => {
    this.x = this.x - this.speed;
  };
}
