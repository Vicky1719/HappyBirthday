class NiñoGloton {
    constructor() {
      // propiedades del niñoGloton
      this.img = new Image();
      this.img.src = "./images/gloton.png";
      this.x = Math.random() * canvas.width;
      this.y = 0;
      this.w = 40;
      this.h = 35;
      this.speed = 3;
    }
  
    drawNiñoGloton = () => {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    };

    comerNiñoGloton = () => {
        this.y = this.y + this.speed;
      };
}