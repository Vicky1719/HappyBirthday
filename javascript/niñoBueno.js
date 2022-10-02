class NiñoBueno {
    constructor() {
        // propiedades del niñoBueno
        this.img = new Image();
        this.img.src = "./images/niñobueno.png";
        this.x = 50;
        this.y = 50;
        this.w = 40;
        this.h = 35;

    } 
}

drawNiñoBueño = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
}