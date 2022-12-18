/**
 * Main game
 */

/**
 * Strict mode is declared by adding "use strict"; to the beginning of a script
 * @see https://www.w3schools.com/js/js_strict.asp
 */
"use strict";

// ### Game context values
let gameContextSize = { width: 600, height: 600 };
let gameContextType = "2d";
let gameContext = new Context(gameContextSize, gameContextType);

// Create game context
let gameElement = document.getElementById("game_TicTacToe");
let contextElement = gameContext.createContext(gameElement)

// Game Mouse events register
let gameMouse = new Mouse(gameElement, false);

// Brush
let gameBrush = new Draw(contextElement);

// Game board
let gameBoard = new GameBoard(contextElement);

// Sprites
let gameSpriteX = new Sprites(contextElement, 'assets/aspa.svg');
let gameSpriteY = new Sprites(contextElement, 'assets/ovalo.svg');

// ### Game logic

// Turn number
let gameTurnNumber = 1;
let gameMaxTurns = 5;

// Game turns
const playerTurn = 1;
const cpuTurn = 2;
let gameTurnPosition = playerTurn;

/**
 * The DOMContentLoaded event fires when the HTML document has been completely
 * parsed, and all deferred scripts (<script defer src="…"> and 
 * <script type="module">) have downloaded and executed
 */
document.addEventListener("DOMContentLoaded", function () {

    // Game loop
    let gameLoop = setInterval(function () {
        // Clear surface
        gameContext.clearCanva();

        // Draw turn banner 
        gameBoard.banner(gameTurnPosition, gameTurnNumber);

        // Check turn movement
        if (gameTurnNumber != gameMaxTurns) {
            switch (gameTurnPosition) {
                case playerTurn:
                    playerMoveTurn();
                    break;
                case cpuTurn:
                    cpuMoveTurn();
                    break;
            }
        }

        // Redraw gameboard
        gameBoard.draw();

        // Draw matrix sprites
        gameBoard.drawMatrix(gameSpriteX, gameSpriteY);

        // Check won game
        switch (gameBoard.check()) {
            case playerTurn:
                gameBrush.text(10, 65, 'Player wins', "18px Arial", "white");
                clearInterval(gameLoop);
                break;
            case cpuTurn:
                gameBrush.text(10, 65, 'Cpu wins', "18px Arial", "white");
                clearInterval(gameLoop);
                break;
        }

    }, 33);

});

function playerMoveTurn() {
    gameElement.onmousedown = function () {
        // Check if player turn
        let positionClickedId = gameBoard.getClickedCellId(gameMouse.getX(), gameMouse.gety());
        if (positionClickedId !== 0) {
            let matrix = gameBoard.get();
            if (typeof matrix[positionClickedId] === 'undefined') {
                // Push in matrix 
                gameBoard.push(positionClickedId, playerTurn);
                // change turn
                gameTurnPosition = cpuTurn;
            } else {
                console.log('cell full');
            }
        }
    };
}

function cpuMoveTurn() {
    // Get board matrix to check positions
    let matrix = gameBoard.get();

    // Select random position
    let randomPosition = getRandom(1, 9);
    let logicPosition = getLogic(matrix);
    
    // console.log(randomPosition);
     console.log(logicPosition);

    // If position is full, repeat recursively
    if (typeof matrix[logicPosition] !== 'undefined') {
        return cpuMoveTurn();
    }
    gameBoard.push(logicPosition, cpuTurn);

    gameTurnPosition = playerTurn;
    gameTurnNumber++;
}

function getRandom(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

function getLogic(matrix) {
    // center free in first cpu turn?  
    if (typeof matrix[5] === 'undefined' && gameTurnNumber === 1) {   
        return 5;
    }  

    // If the center is captured
    if (typeof matrix[5] !== 'undefined' && gameTurnNumber === 1) {   
        return getRandom(1, 9);
    }  
 
    // Avoid horizontal combinations
    if(typeof matrix[3] === 'undefined' && matrix[1]===1 && matrix[2]===1){
        return 3;
    }

    if(typeof matrix[1] === 'undefined' && matrix[2]===1 && matrix[3]===1){
        return 1;
    }

    if(typeof matrix[2] === 'undefined' && matrix[1]===1 && matrix[3]===1){
        return 2;
    }

    if(typeof matrix[6] === 'undefined' && matrix[4]===1 && matrix[5]===1){
        return 6;
    }

    if(typeof matrix[5] === 'undefined' && matrix[4]===1 && matrix[6]===1){
        return 5;
    }

    if(typeof matrix[4] === 'undefined' && matrix[5]===1 && matrix[6]===1){
        return 4;
    }

    if(typeof matrix[9] === 'undefined' && matrix[7]===1 && matrix[8]===1){
        return 9;
    }

    if(typeof matrix[8] === 'undefined' && matrix[7]===1 && matrix[9]===1){
        return 8;
    }

    if(typeof matrix[7] === 'undefined' && matrix[8]===1 && matrix[9]===1){
        return 7;
    }

    // Avoid vertical combinations
    if(typeof matrix[7] === 'undefined' && matrix[1]===1 && matrix[4]===1){
        return 7;
    }

    if(typeof matrix[4] === 'undefined' && matrix[1]===1 && matrix[7]===1){
        return 4;
    }

    if(typeof matrix[1] === 'undefined' && matrix[4]===1 && matrix[7]===1){
        return 1;
    }

    if(typeof matrix[8] === 'undefined' && matrix[2]===1 && matrix[5]===1){
        return 8;
    }

    if(typeof matrix[4] === 'undefined' && matrix[1]===2 && matrix[8]===1){
        return 4;
    }
    if(typeof matrix[2] === 'undefined' && matrix[5]===1 && matrix[8]===1){
        return 2;
    }

    if(typeof matrix[9] === 'undefined' && matrix[3]===1 && matrix[6]===1){
        return 9;
    }

    if(typeof matrix[6] === 'undefined' && matrix[3]===2 && matrix[9]===1){
        return 6;
    }

    if(typeof matrix[3] === 'undefined' && matrix[6]===1 && matrix[9]===1){
        return 3;
    }
 
    // Avoid diagonal combinations
    if(typeof matrix[9] === 'undefined' && matrix[1]===1 && matrix[5]===1){
        return 9;
    }

    if(typeof matrix[5] === 'undefined' && matrix[1]===1 && matrix[9]===1){
        return 5;
    }
 
    if(typeof matrix[1] === 'undefined' && matrix[5]===1 && matrix[9]===1){
        return 1;
    }

    if(typeof matrix[9] === 'undefined' && matrix[3]===1 && matrix[5]===1){
        return 7;
    }

    if(typeof matrix[5] === 'undefined' && matrix[3]===1 && matrix[7]===1){
        return 5;
    }
 
    if(typeof matrix[3] === 'undefined' && matrix[5]===1 && matrix[7]===1){
        return 3;
    }

    return getRandom(1, 9);
}