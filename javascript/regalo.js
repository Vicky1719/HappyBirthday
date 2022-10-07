class Regalo {
  constructor() {
    // propiedades del regalo
    this.img = new Image();
    this.img.src = "./images/regaloLazo.png";

    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.w = 60;
    this.h = 80;
    this.speed = 1;
  }

  drawRegalo = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
}
