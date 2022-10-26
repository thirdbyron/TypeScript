"use strict";
const A = 5;
let a = 4;
let b = 'Hello, world!';
let c = true;
const D = b + c;
const e = ['hi', 'name'];
let f = 4.5;
f = 'Custom';
function test(a) {
    return 5;
}
const test2 = (a) => {
    return a * 2;
};
f = e.map((x) => x.toLowerCase());
function countCoord(coord) { }
const printIt = (id) => {
    if (typeof id === 'number') {
        console.log(id.toString());
    }
    else if (typeof id === 'string') {
        id.toUpperCase();
    }
};
const getSum = (a) => {
    if (Array.isArray(a)) {
    }
};
const x = undefined;
const z = null;
function print(coord) {
    return coord;
}
let one = {
    x: 5,
    y: 10,
};
let be = print(one);
console.log(be);
let literal = 'test';
function performAction(action) {
    switch (action) {
        case 'up':
            return -1;
        case 'down':
            return 1;
    }
}
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var Decision;
(function (Decision) {
    Decision["Up"] = "Up";
})(Decision || (Decision = {}));
var calcEnum;
(function (calcEnum) {
    calcEnum[calcEnum["Yes"] = 1] = "Yes";
    calcEnum["No"] = "No";
})(calcEnum || (calcEnum = {}));
var Test;
(function (Test) {
    Test[Test["A"] = 0] = "A";
})(Test || (Test = {}));
let hh = 1 /* AndB.B */;
function logTime(num) {
    console.log(new Date());
    return num;
}
logTime('hallo');
function logTimeIf(num) {
    if (typeof num === 'string') {
        num.toUpperCase();
    }
    console.log(new Date());
    return num;
}
