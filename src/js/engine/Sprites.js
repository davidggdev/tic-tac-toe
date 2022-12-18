class Sprites{ 
    image;
    /**
     * On new instance get canva context how own
     * @param {*} context 
     */
    constructor(context, imgPath) {
        this.context = context;
        this.brush = new Draw(context);
        this.image = new Image();
        this.image.src = imgPath;
    }

    draw(x, y){ 
        this.context.drawImage(this.image,x-32,y-32,64,64);
    }
 
}