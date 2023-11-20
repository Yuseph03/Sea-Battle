import Gameboard from '../Gameboard'
const gridCell = {hit: false, ship: false};
const hitGridCell = {hit: true, ship: false};

describe('Gameboard class modules', () => {
    test('Gameboard tile dimensions', () => {
        const newGameboard = new Gameboard();
        expect(newGameboard.Grid).toStrictEqual([[gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell]])
    });
    test('Gameboard recieving Attack', () => {
        const newGameboard = new Gameboard();
        newGameboard.receieveAttack(0, 0);
        expect(newGameboard.Grid).toStrictEqual([[hitGridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell]])
    });
    test('Gameboard recieving Attack', () => {
        const newGameboard = new Gameboard();
        newGameboard.receieveAttack(3, 6);
        expect(newGameboard.Grid).toStrictEqual([[gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, hitGridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell]])
    });
    test('Placing ship on gameboard', () => {
        const shipGridCell = {hit: false, ship: true}
        const newGameboard = new Gameboard();
        newGameboard.placeShip(4, 2, 3);
        expect(newGameboard.Grid).toStrictEqual([[gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, shipGridCell, shipGridCell, shipGridCell, shipGridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell],
            [gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell]])
    });
    test('Receiving attack (missed shot)', () => {
        const newGameboard = new Gameboard();
        newGameboard.receieveAttack(2, 3);
        expect(newGameboard.missedShot).toBeTruthy();
    });
    test('Receiving attack (ship tile)', () => {
        const newGameboard = new Gameboard();
        newGameboard.placeShip(3, 2, 3);
        newGameboard.receieveAttack(2, 3);
        expect(newGameboard.shipGotShot).toBeTruthy();
    });
    test('Check ship existence (none exists)', () => {
        const newGameboard = new Gameboard();
        expect(newGameboard.checkShips()).toBe(false);
    })
    test('Check ship existence (ships exists)', () => {
        const newGameboard = new Gameboard();
        newGameboard.placeShip(1, 4, 9);
        expect(newGameboard.checkShips()).toBe(true);
    })
})