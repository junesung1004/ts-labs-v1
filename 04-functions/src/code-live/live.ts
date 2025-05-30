// (1)  함수 선언식
// (2)  함수 표현식
// (3)  화살표 함수

function add(a = 1, b: number): number {
  return a + b;
}

const sub = function (a: number, b: number): number {
  return a - b;
};

const multiply = (a: number, b: number): number => {
  return a * b;
};

// 선택적 매개변수
function log(msg: string, userName?: string): void {
  console.log(`${userName} : ${msg}`);
}

// 나머지 매개변수 ... : spred 연산자
function sumAll(...nums: number[]) {
  return nums.reduce((acc, cur) => acc + cur, 0);
}

sumAll(1, 2);

// 함수 = 값
// 직접 함수타입을 지정하는 방식식
function computer(a: number, b: number, op: (a: number, b: number) => number) {
  return op(a, b);
}

// 함수 오버로딩
// 시그니처가 달라야 한다.
// 매개변수
function func(a: number, b: string): number;
function func(a: number, b: number): number;
function func(a: string, b: number): number;
function func(a: any, b: any): any {
  return a + b;
}
