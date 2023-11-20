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
    get IsSunk() {
        return this.isSunk;
    }
    hit() {
        return this.hitNum += 1;
    }
    ;
    checkIsSunk() {
        if (this.Length === this.HitNum) {
            this.isSunk = true;
            return this.IsSunk;
        }
        return this.IsSunk;
    }
    ;
}
