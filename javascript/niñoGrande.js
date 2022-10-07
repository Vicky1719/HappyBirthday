class NiñoGrande {
  constructor(orientacion) {
    // propiedades del niñoGrande
    this.img = new Image();
    this.img.src = "./images/ruben.png";

    if (orientacion === "lado") {
      this.x = canvas.width;
      this.y = Math.random() * canvas.height;
    }
    if (orientacion === "arriba") {
      this.x = Math.random() * canvas.width;
      this.y = 0;
    }

    if (orientacion === "loco") {
      this.x = 50;
      this.y = 50;
      this.direcionX = 1;
      this.direcionY = 1;
    }

    this.w = 80;
    this.h = 100;

    this.speed = 3;
  }

  drawNiñoGrande = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  molestarNiñoGrande1 = () => {
    this.x = this.x - this.speed;
  };

  molestarNiñoGrande2 = () => {
    this.y = this.y + this.speed;
  };

  locoChoque = () => {
    this.x = this.x + this.direcionX * 4;
    this.y = this.y + this.direcionY * 4;

    if (this.x > canvas.width - 50) {
      this.direcionX = -1;
    }

    if (this.y > canvas.height - 100) {
      this.direcionY = -1;
    }

    if (this.x < 0) {
      this.direcionX = 1;
    }

    if (this.y < 0) {
      this.direcionY = 1;
    }
  };
}
