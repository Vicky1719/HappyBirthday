class NiñoDardo {
  constructor() {
    // propiedades del niñoDardo
    this.img = new Image();
    this.img.src = "./images/niñodardo.png";

    this.x = 1000;
    this.y = Math.random() * canvas.height;
    this.w = 35;
    this.h = 40;
    this.speed = 3;
  }

  drawNiñoDardo = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  caminarNiñoDardo = () => {
    this.x = this.x - this.speed;
  };
}
