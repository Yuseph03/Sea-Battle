export default class Player {
    constructor(players = ['player1', 'player2'], turn = 0) {
        this.players = players;
        this.turn = turn;
    }
    attackTurn() {
        let currentPlayer = this.players[this.turn];
        this.turn += 1;
        if (this.turn == this.players.length) {
            this.turn = 0;
        }
        return currentPlayer;
    }
}
