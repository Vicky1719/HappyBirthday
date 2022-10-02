class NiñoDardo{
    constructor() {
// propiedades del niñoDardo
this.img = new Image();
this.img.src = "./images/niñodardo.png";
 // FALTAN COSAS

    }

    drawNiñoDardo = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

}

