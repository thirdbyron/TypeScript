const A: number = 5;

let a: number = 4;
let b: string = 'Hello, world!';
let c: boolean = true;

const D = b + c;

const e: string[] = ['hi', 'name'];

let f: any = 4.5;

f = 'Custom';

function test(a: string): string | number {
    return 5;
}

const test2 = (a: number): number => {
    return a * 2;
};

f = e.map((x) => x.toLowerCase());

function countCoord(coord: { lar: number; lng?: number }) {}

const printIt = (id: number | string) => {
    if (typeof id === 'number') {
        console.log(id.toString());
    } else if (typeof id === 'string') {
        id.toUpperCase();
    }
};

const getSum = (a: number | number[]): void => {
    if (Array.isArray(a)) {
    }
};

const x: undefined = undefined;

const z: null = null;

type Point = {
    x: number;
    y: number;
};

function print(coord: Point): Point {
    return coord;
}

let one: Point = {
    x: 5,
    y: 10,
};

let be = print(one);

console.log(be);

type stringOrNumber = string | number;

interface IPoint {
    id: number;
    name: string;
}

interface I3DPoint extends IPoint {
    z: number;
}

type D3Point = Point & {
    z: number;
};

interface ITest {
    a: string;
}

interface Itest {
    b: string;
}

interface IInfo {
    desc: string;
    isActive: boolean;
}

interface ITag {
    name: string;
    value: number;
}
interface IBackendData {
    userId: number;
    id: number;
    title: string;
    info: IInfo;
    tags: ITag[];
}

let literal: 'test' = 'test';

type action = 'up' | 'down';

function performAction(action: action): -1 | 1 {
    switch (action) {
        case 'up':
            return -1;
        case 'down':
            return 1;
    }
}

enum Direction {
    Up,
    Down,
    Left,
    Right,
}

enum Decision {
    Up = 'Up',
}

enum calcEnum {
    Yes = 1,
    No = 'No',
}

enum Test {
    A,
}

const enum AndB {
    A,
    B,
}

let hh = AndB.B;

function logTime<T>(num: T): T {
    console.log(new Date());
    return num;
}

logTime<string>('hallo');

function logTimeIf<T>(num: T): T {
    if (typeof num === 'string') {
        num.toUpperCase();
    }
    console.log(new Date());
    return num;
}

interface MyInterface {
    transform: <T>(a: T) => T;
}


