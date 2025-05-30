// 타입스크립트 : 타입을 추가한 언어 - 정적 타입을 추가한 언어
// .ts -> .js 확장자 파일로 컴파일(트렌스파일)
console.log("hello world");

let num: number = 10; // 타입을 지정
let str: string = "hello";

function printLenth(str: string) {
  console.log(str.length);
}

printLenth("hello");
// printLenth(undefined); // tsconfig 파일에서 strict옵션이 true면 에러가 발생
