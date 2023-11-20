import Player from '../Player'

describe('Player class modules', () => {
    test('Test attackTurn current player', () => {
        const player = new Player();
        expect(player.attackTurn()).toBe('player1');
    });
})