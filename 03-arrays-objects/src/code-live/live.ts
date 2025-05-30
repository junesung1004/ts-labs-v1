// 1. 배열
let numbers: number[] = [1, 2, 3];
numbers.push(1);
numbers.unshift(0);
console.log(numbers);

let numbers2: Array<number> = [1, 2, 3];

let fruits: string[] = ["apple", "banana", "orange"];

let flexArr: (number | string | boolean)[] = [1, "2", "3", 4, true];

// 2차원 배열
let twoDimArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

let twoDimArr2: (string | number)[][] = [
  ["1", "2", "3"],
  [4, 5, 6],
];

// 2. 튜플 - > 배열에서 사용하는 타입 문법
// 길이와 타입이 고정된 특수 배열
// js로 변환시 배열

let tuple: [number, number] = [10, 20];

// readonly : 읽기 전용 (Immutable = 불변)
let tuple2: readonly [number, string] = [1, "hello"];
// tuple2.push(0)  불가능
tuple2 = [2, "goodbye"]; // 이건 가능

const users: [number, string][] = [
  [1, "윤유저"],
  [2, "김유저"],
];
