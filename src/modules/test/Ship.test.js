import Ship from '../Ship';

describe('Ship class methods', () => {
    const newShip = new Ship(4, 0, false); 
    test('Ship length is available', () => {
        expect(newShip.Length).toBe(4);
    });
    test('Ship is hit', () => {
        newShip.hit();
        expect(newShip.HitNum).toBe(1);
    });
    test('Ship sinks', () => { 
        newShip.hit();
        newShip.hit();
        newShip.hit();
        expect(newShip.checkIsSunk()).toBeTruthy();
    });
})