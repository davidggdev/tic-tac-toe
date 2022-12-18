class Context {
        sizes; 
        width;
        height;
        contextType;
        contextElement;
        context;

    constructor(sizes, contextType) { 
        this.width = sizes.width;
        this.height = sizes.height;
        this.contextType = contextType;
    }

    createContext(canvaElementId){
        this.contextElement = canvaElementId; 
        this.context = this.contextElement.getContext(this.contextType);
        
        // Setup canva sizes
        this.context.canvas.width  = this.width;
        this.context.canvas.height = this.height; 
        return this.context;
    }

    getContextElement() {
        return this.contextElement;
    }

    getContext(){
        return this.context;
    }

    clearCanva(){
        this.context.clearRect(0, 0, this.width, this.height);
    }
    
}