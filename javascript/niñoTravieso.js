class NiñoTravieso {
  constructor() {
    // propiedades del niñoTravieso
    this.img = new Image();
    this.img.src = "./images/traviesos.png";

    this.x = 1000;
    this.y = Math.random() * canvas.height;
    this.w = 50;
    this.h = 60;
    this.speed = 1;
  }

  drawNiñoTravieso = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  correrNiñoTravieso = () => {
    this.x = this.x - this.speed;
  };
}
