class Globo {
    constructor() {
// propiedades del globo
this.img = new Image ();
this.img.src = "./images/globo.png"





    }
}


drawGlobo = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h,)
}