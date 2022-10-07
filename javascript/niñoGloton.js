class NiñoGloton {
  constructor() {
    // propiedades del niñoGloton
    this.img = new Image();
    this.img.src = "./images/xoel.png";
    this.x = Math.random() * canvas.width;
    this.y = 0;
    this.w = 50;
    this.h = 60;
    this.speed = 3;
  }

  drawNiñoGloton = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  comerNiñoGloton = () => {
    this.y = this.y + this.speed;
  };
}
