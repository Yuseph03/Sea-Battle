export default class Ship {
    constructor(
        private length: number, 
        private hitNum: number, 
        public isSunk: boolean
        ) {}
    get Length(): number {
        return this.length;
    };
    get HitNum(): number {
        return this.hitNum;
    }
    hit(hit: number): number {
        return this.hitNum += hit;
    };
    IsSunk(): boolean {
        if(this.length === this.hitNum) {
            this.isSunk = true;
        }
        return this.isSunk;
    };
}