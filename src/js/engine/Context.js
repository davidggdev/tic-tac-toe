/**
 * Handle canva context
 */
class Context {
    /**
     * Canva object sizes must contains width and height properties
     */
    sizes;
    
    /**
     * Instance width
     */
    width;

    /**
     * Instance height
     */
    height;

    /**
     * Context type
     */
    contextType;

    /**
     * Html canva context element
     */
    contextElement;

    /**
     * Canva context
     */
    context;

    /**
     * On new instance get canvas sizes and context type 
     * @param {object} sizes 
     * @param {string} contextType 
     */
    constructor(sizes, contextType) { 
        this.width = sizes.width;
        this.height = sizes.height;
        this.contextType = contextType;
    }

    /**
     * Create canva context
     * @param {int} canvaElementId 
     * @returns Canvas context
     */
    createContext(canvaElementId){
        this.contextElement = canvaElementId; 
        this.context = this.contextElement.getContext(this.contextType);
        
        // Setup canva sizes
        this.context.canvas.width  = this.width;
        this.context.canvas.height = this.height; 
        return this.context;
    }

    /**
     * Html element
     * @returns Canvas element
     */
    getContextElement() {
        return this.contextElement;
    }

    /**
     * Return context
     * @returns Canvas context
     */
    getContext(){
        return this.context;
    }

    /**
     * Clear canvas surface context
     */
    clearCanva(){
        this.context.clearRect(0, 0, this.width, this.height);
    }
    
}