export default class Player {
    constructor( 
        public players: string[] = ['player1', 'player2'],
        public turn: number = 0
    ) {}
    attackTurn(): string {
        let currentPlayer: string = this.players[this.turn];
        this.turn += 1;
        if(this.turn == this.players.length) {
            this.turn = 0;
        }
        return currentPlayer;
    }

    // TODO: ADD COMPUTER LOGIC
}