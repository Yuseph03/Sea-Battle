import Ship from '../Ship';

describe('Ship class methods', () => {
    const newShip = new Ship(4, 0, false); 
    test('Ship length is available', () => {
        expect(newShip.Length).toBe(4);
    });
    test('Ship is hit', () => {
        newShip.hit(1);
        expect(newShip.HitNum).toBe(1);
    });
    test('Ship sinks', () => { 
        expect(newShip.hit(4)).toBeTruthy();
    });
})