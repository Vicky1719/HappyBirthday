class Regalo {
  constructor() {
    // propiedades del regalo
    this.img = new Image();
    this.img.src = "./images/regalo.png";

    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.w = 35;
    this.h = 40;
    this.speed = 1;
  }

  drawRegalo = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
}
