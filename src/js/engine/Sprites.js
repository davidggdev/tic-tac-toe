/**
 * Handle elements like single units also called sprites in others realms.
 */
class Sprites{ 
    /**
     * HTMLImageElement to get sprite appareance
     */
    image;
    
    /**
     * On new instance get canva context how own and image sprite path
     * @param {*} context 
     */
    constructor(context, imgPath) {
        this.context = context;
        this.brush = new Draw(context);
        this.image = new Image();
        this.image.src = imgPath;
    }

    /**
     * Draw sprite on context
     * @param {int} x 
     * @param {int} y 
     */
    draw(x, y){ 
        this.context.drawImage(this.image,x-32,y-32,64,64);
    }
 
}