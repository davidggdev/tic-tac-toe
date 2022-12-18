/**
 * Handle mouse events
 */
class Mouse {
    /**
     * Mouse X position
     */
    mouseX;

    /**
     * Mouse Y position
     */
    mouseY;

    /**
     * Element to bind listener on mousemove on it
     */
    elementEvent;

    /**
     * On new instance get element and if show mouse position debug
     * @param {HTML element} elementEvent 
     */
    constructor(elementEvent, debug) {
        let self = this;
        this.elementEvent = elementEvent;
        this.elementEvent.addEventListener('mousemove', function (mouseEvent) {
            var mousePos = self.getMousePosition(mouseEvent);
            if (debug === true) {
                console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);
            }
        }, false); 
    }

    /**
     * Handle mouse event on element to get positions
     * @param {event} mouseEvent 
     * @returns Object with mouse positions
     */
    getMousePosition(mouseEvent) {
        let rect = this.elementEvent.getBoundingClientRect();
        this.mouseX = mouseEvent.clientX - rect.left;
        this.mouseY = mouseEvent.clientY - rect.top;
        return {
            x: this.mouseX,
            y: this.mouseY
        };
    }

    /**
     * Getter
     * @returns Mouse x position
     */
    getX() {
        return this.mouseX;
    }

    /**
     * Getter
     * @returns Mouse y position
     */
    gety() {
        return this.mouseY;
    }
     
}
