export default class Ship {
    constructor(
        private length: number, 
        private hitNum: number, 
        private isSunk: boolean
        ) {}
    get Length(): number {
        return this.length;
    };
    get HitNum(): number {
        return this.hitNum;
    }
    get IsSunk(): boolean {
        return this.isSunk;
    }
    hit(): number {
        return this.hitNum += 1;
    };
    checkIsSunk(): boolean {
        if(this.Length === this.HitNum) {
            this.isSunk = true;
            return this.IsSunk;
        }
        return this.IsSunk;
    };
}