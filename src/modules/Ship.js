export default class Ship {
    constructor(length, hitNum, isSunk) {
        this.length = length;
        this.hitNum = hitNum;
        this.isSunk = isSunk;
    }
    get Length() {
        return this.length;
    }
    ;
    get HitNum() {
        return this.hitNum;
    }
    hit(hit) {
        return this.hitNum += hit;
    }
    ;
    IsSunk() {
        if (this.length === this.hitNum) {
            this.isSunk = true;
        }
        return this.isSunk;
    }
    ;
}
