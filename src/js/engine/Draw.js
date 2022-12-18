/**
 * Draw primitives and 2d basic shapes
 * @thanks https://stackoverflow.com/a/9251673
 */
class Draw {
    /**
     * Own canva context
     */
    context;

    /**
     * On new instance get canva context how own
     * @param {*} context 
     */
    constructor(context) {
        this.context = context;
    }

    /**
     * Draw a line
     * @param {int} ix Initial x position
     * @param {int} iy Initial y position
     * @param {int} ex End x position
     * @param {int} ey End y position 
     * @param {*} colors Mix, one color or object with strokeColor and/or fillColor
     * @param {int} lineWidth Line width
     */
    line(ix, iy, ex, ey, colors, lineWidth) {
        this.context.beginPath();
        this.setColors(colors);
        this.context.lineWidth = (typeof lineWidth !== 'undefined') ? lineWidth : 1;
        this.context.moveTo(ix, iy);
        this.context.lineTo(ex, ey);
        this.context.stroke();
        this.context.closePath();
    }

    /**
     * Draw a rect
     * @param {int} ix Initial x position
     * @param {int} iy Initial y position 
     * @param {int} w Width 
     * @param {int} h Height
     * @param {*} colors Mix, one color or object with strokeColor and/or fillColor 
     * @param {int} lineWidth Line width
     */
    rect(ix, iy, w, h, colors, lineWidth) { console.log(lineWidth)
        this.context.beginPath(); 
        this.setColors(colors)
        this.context.lineWidth = lineWidth;
        this.context.rect(ix, iy, w, h); 
        this.context.stroke();
        if (typeof colors.fillColor !== 'undefined') {
            this.context.fill();
        }
        this.context.closePath();
    }

    /**
     * Draw a circle
     * @param {int} ix Initial x position
     * @param {int} iy Initial y position
     * @param {int} radius Circle radius
     * @param {*} colors Mix, one color or object with strokeColor and/or fillColor
     */
    circle(ix, iy, radius, colors) {
        this.context.beginPath();
        this.context.arc(ix, iy, radius, 0, 2 * Math.PI);
        this.setColors(colors)
        this.context.stroke();
        if (typeof colors.fillColor !== 'undefined') {
            this.context.fill();
        }
        this.context.closePath();
    }

    /**
     * Write a text
     * @param {int} ix Initial x position
     * @param {int} iy Initial y position
     * @param {*} message Message to write
     * @param {string} font Font style. Ex. :  "15px Arial"
     * @param {string} color Text color
     */
    text(ix, iy, message, font, color) {
        this.context.beginPath();
        this.context.fillStyle = color;
        this.context.font = font;
        this.context.fillText(message, ix, iy);
        this.context.closePath();
    }

    /**
     * Set up mode to stroke and fill with colors
     * @param {*} colors Mix, one color or object with strokeColor and/or fillColor
     */
    setColors(colors) {
        this.context.strokeStyle = (typeof colors.strokeColor === 'undefined') ? colors : colors.strokeColor;
        this.context.fillStyle = (typeof colors.fillColor === 'undefined') ? colors : colors.fillColor;
    }
}