class GameBoard {
    brush;
    matrix = [];

    /**
     * On new instance get canva context how own
     * @param {*} context 
     */
    constructor(context) {
        this.context = context;
        this.brush = new Draw(context);
    }
    draw() {
        this.brush.line(200, 20, 200, 580, { strokeColor: 'orange' }, 2);
        this.brush.line(400, 20, 400, 580, { strokeColor: 'orange' }, 2);
        this.brush.line(20, 200, 580, 200, { strokeColor: 'orange' }, 2);
        this.brush.line(20, 400, 580, 400, { strokeColor: 'orange' }, 2);
    }

    push(position, characterValue) {
        this.matrix[position] = characterValue;
    }

    get() {
        return this.matrix;
    }

    drawMatrix(sp1, sp2) {
        let matrix = this.get();
        for (let index = 0; index < matrix.length; index++) {
            const element = matrix[index];
            for (let cells = 1; cells <= 9; cells++) {
                let positionSprite = this.getPositionByIndex(index);
                if (index === cells && element === 1) {
                    // console.log('position ' + index + ' value ' + element) 
                    sp1.draw(positionSprite.x, positionSprite.y );
                }
                if (index === cells && element === 2) {
                    // console.log('position ' + index + ' value ' + element) 
                    sp2.draw(positionSprite.x, positionSprite.y );
                }
            }
        }
    }

    banner(turnPosition, turnNumber) {
        this.brush.text(10, 20, this.translateTurn(turnPosition) + ' Turn', "15px Arial", "white");
        this.brush.text(10, 40, turnNumber + ' Turns', "15px Arial", "white");
    }

    translateTurn(turn) {
        return turn === playerTurn ? 'Player' : 'CPU';
    }

    getClickedCellId(x, y) {
        let position = 0;
        if (x > 20 && x < 200 && y > 20 && y < 200) {
            position = 1;
        } else
            if (x > 200 && x < 400 && y > 20 && y < 200) {
                position = 2;
            } else
                if (x > 400 && x < 580 && y > 20 && y < 200) {
                    position = 3;
                }

        if (x > 20 && x < 200 && y > 200 && y < 400) {
            position = 4;
        } else
            if (x > 200 && x < 400 && y > 200 && y < 400) {
                position = 5;
            } else
                if (x > 400 && x < 580 && y > 200 && y < 400) {
                    position = 6;
                }

        if (x > 20 && x < 200 && y > 400 && y < 580) {
            position = 7;
        } else
            if (x > 200 && x < 400 && y > 400 && y < 580) {
                position = 8;
            } else
                if (x > 400 && x < 580 && y > 400 && y < 580) {
                    position = 9;
                }
        return position;
    }

    getPositionByIndex(index) {
        let ix, iy;
        switch (index) {
            case 1:
                ix = 100;
                iy = 100;
                break;
            case 2:
                ix = 300;
                iy = 100;
                break;
            case 3:
                ix = 500;
                iy = 100;
                break;
            case 4:
                ix = 100;
                iy = 300;
                break;
            case 5:
                ix = 300;
                iy = 300;
                break;
            case 6:
                ix = 500;
                iy = 300;
                break;
            case 7:
                ix = 100;
                iy = 500;
                break;
            case 8:
                ix = 300;
                iy = 500;
                break;
            case 9:
                ix = 500;
                iy = 500;
                break;
        }
        return { x: ix, y: iy };
    }

    check() { 
        let winLineColor = "#beb11836";
        let winLineWidth = 64;
        for (let index = 1; index <= 2; index++) {
            if (this.matrix[1] === index && this.matrix[2] === index && this.matrix[3] === index) {
                this.brush.line(80,100,520,100,winLineColor,winLineWidth);
                return index;
            }
            if (this.matrix[4] === index && this.matrix[5] === index && this.matrix[6] === index) { 
                this.brush.line(80,300,520,300,winLineColor,winLineWidth);
                return index;
            }
            if (this.matrix[7] === index && this.matrix[8] === index && this.matrix[9] === index) {
                this.brush.line(80,500,520,500,winLineColor,winLineWidth);
                return index;
            } 
            if (this.matrix[1] === index && this.matrix[5] === index && this.matrix[9] === index) {
                this.brush.line(80,80,520,520,winLineColor,winLineWidth);
                return index;
            }
            if (this.matrix[1] === index && this.matrix[4] === index && this.matrix[7] === index) {
                this.brush.line(100,80,100,520,winLineColor,winLineWidth);
                return index;
            }
            if (this.matrix[3] === index && this.matrix[6] === index && this.matrix[9] === index) {
                this.brush.line(500,80,500,520,winLineColor,winLineWidth);
                return index;
            }
            if (this.matrix[2] === index && this.matrix[5] === index && this.matrix[8] === index) {
                this.brush.line(300,80,300,520,winLineColor,winLineWidth);
                return index;
            } 
            if (this.matrix[3] === index && this.matrix[5] === index && this.matrix[7] === index) {
                this.brush.line(520,80,80,520,winLineColor,winLineWidth);
                return index;
            } 
        }  
        return 0;
    }
}