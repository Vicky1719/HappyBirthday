class Tarta {
    constructor() {
      // propiedades de la tarta
      this.img = new Image();
      this.img.src = "./images/tarta.jpg";
      this.x = Math.random() * canvas.width;
      this.y = 0;
      this.w = 40;
      this.h = 35;
      this.speed = 3;
    }
  
    drawTarta = () => {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    };

    volarTarta = () => {
        this.y = this.y + this.speed;
      };
}