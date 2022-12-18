class Mouse {
    mouseX;
    mouseY;
    elementEvent;

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

    getMousePosition(mouseEvent) {
        let rect = this.elementEvent.getBoundingClientRect();
        this.mouseX = mouseEvent.clientX - rect.left;
        this.mouseY = mouseEvent.clientY - rect.top;
        return {
            x: this.mouseX,
            y: this.mouseY
        };
    }

    getX() {
        return this.mouseX;
    }

    gety() {
        return this.mouseY;
    }
     
}
