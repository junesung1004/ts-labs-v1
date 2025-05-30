// 추론의 단서 x
function add(a: number, b: number): number {
  return a + b;
}

function add1(a: unknown, b: unknown) {
  //타입 가드를 사용하면 unknown 타입을 사용할 수 있다.
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
}

//기본값을 지정하면 추론 가능
function add2(a = 1, b = 2) {
  return a + b;
}
