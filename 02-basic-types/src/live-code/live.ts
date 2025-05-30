// 타입스크립트 기본 타입

// (1) number
// : number 를 "타입 어노테이션" 이라 한다.
let num: number = 123; // 123은 숫자형 리터럴이라 추론을 할 수 있어서 타입을 지정안해도 에러는 발생이 안된다. 타입 추론
num = 1321321312312321;
num = -1;
num = 0.12321321321;
// num = "1233" // x

// (2) 문자열
let str: string = "hello";
str = `${num}`;
str.toUpperCase();

// (3) boolean
let bool: boolean = true;

// (4) null
let nullValue: null = null;

// (5) undefiend
let iundefiendVal: undefined;
iundefiendVal = undefined;

// (6) 값 자체가 타입 = 리터럴 타입(유니언)
let answer: 0 | 1;
answer = 1; // ✅

let direction: "left" | "right" | "up" | "down";
direction = "left"; // ✅
direction = "right"; // ✅
// direction = "forward"; // ❌ 에러

// (7) any타입과  unknown 타입
// any : 뭐든지 허용하고 바로 사용 가능
// unknown : 안전한 any(바로 사용 x)

let a: any = 123;
a = "";
a = {};

let b: unknown = 123;
b = "";
b = {};

// 타입가드를 사용하면 사용 가능
// unknown 타입은 타입을 확인하기 전까지는 사용을 제한함
if (typeof b === "string") {
  b.toUpperCase();
}

// (8) void 타입
// 반환값이 없다라는 의미
function returnHello(): string {
  return "hello";
}

function sayHello(): void {
  console.log("hello");
}

function echoMsg(msg: string): string {
  return msg;
}

// (9) never
// 어떤 값도 담을 수 없는 타입

let neverVal: never;
// neverVal = "";
// neverVal = 123;

function throwError(msg: string): never {
  throw new Error();
}

function infiniteLoop(): never {
  while (true) {
    console.log("...");
  }
}
