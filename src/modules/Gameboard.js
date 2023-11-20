export default class Gameboard {
    constructor(gridCell = { hit: false, ship: false }, grid = [[gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
        [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
        [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
        [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
        [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
        [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
        [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
        [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
        [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
        [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell]]) {
        this.gridCell = gridCell;
        this.grid = grid;
    }
    get Grid() {
        return this.grid;
    }
    receieveAttack(x, y) {
        if (this.Grid[x][y]['ship'] === true) {
            this.shipGotShot(x, y);
        }
        else {
            this.missedShot(x, y);
        }
        this.Grid[x][y] = Object.assign(Object.assign({}, this.Grid[x][y]), { hit: true });
    }
    placeShip(shipLength, x, y) {
        for (let i = 0; i < shipLength; i++) {
            this.Grid[x][y + i] = Object.assign(Object.assign({}, this.Grid[x][y]), { ship: true });
        }
    }
    missedShot(x, y) {
        // TODO: Integrate with DOM
        return true;
    }
    shipGotShot(x, y) {
        // TODO: Integrate with DOM
        return true;
    }
    checkShips() {
        const Grid = this.Grid;
        for (let i = 0; i < Grid.length; i++) {
            for (let j = 0; j < Grid.length; j++) {
                if (this.Grid[i][j]['ship'] === true) {
                    return true;
                }
            }
        }
        return false;
    }
}
