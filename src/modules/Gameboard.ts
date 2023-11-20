export default class Gameboard {
    constructor( 
        private gridCell: gridTile = {hit: false, ship: false},
        public grid: gridTile[][] = 
        [[gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
        [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
        [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
        [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
        [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
        [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
        [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
        [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
        [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
        [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell]]
        ) {}

        get Grid() {
            return this.grid;
        }

        receieveAttack(x: number, y: number): void {
            if(this.Grid[x][y]['ship'] === true) {
                this.shipGotShot(x, y)
            } else {
                this.missedShot(x, y);
            }
            this.Grid[x][y] = {...this.Grid[x][y], hit: true};
        }

        placeShip(shipLength: number, x: number, y: number): void {
            for(let i = 0; i < shipLength; i++) {
                this.Grid[x][y + i] = {...this.Grid[x][y], ship: true};
            }
        }

        missedShot(x: number, y: number): boolean {
            // TODO: Integrate with DOM
            return true;
        }

        shipGotShot(x: number, y: number): boolean {
            // TODO: Integrate with DOM
            return true;
        }

        checkShips(): boolean {
            const Grid: gridTile[][] = this.Grid;
            for(let i = 0; i < Grid.length; i++) {
                for(let j = 0; j < Grid.length; j++){
                    if(this.Grid[i][j]['ship'] === true) {
                        return true;
                    }
                }
            }
            return false;
        }
}

interface gridTile {
    hit: boolean;
    ship: boolean;
}