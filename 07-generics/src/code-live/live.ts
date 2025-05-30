// 제네릭 Generic(일반적인)
// 타입을 나중에(사용 시점에) 결정하는 문법
// 코드 재사용성 + 타입 안정
// 제네릭 사용시 매개변수와 리턴문에 T를 사용하면 안되고 함수 에 제네릭이라는 <T>표시를 해줘야 사용이 가능하다.
function echo<T>(value: T): T {
  return value;
}

console.log(echo(2));
console.log(echo("hello"));

type FirstElement<T> = (arr: T[]) => T;

const getFirst: FirstElement<string> = (arr) => arr[0];
console.log(getFirst(["1", "2", "3"]));

const getFirstNum: FirstElement<number> = (arr) => arr[0];
console.log(getFirstNum([1, 2, 3]));

interface User {
  id: number;
  name: string;
}

const getFirstUser: FirstElement<User> = (arr) => arr[0];

console.log(getFirstUser([{ id: 1, name: "june" }]));

//인터페이스에 제네릭 사용
interface ApiResponse<T> {
  success: boolean;
  error?: string;
  data: T;
}

//userResponse
//productResponse
//errResponse

const userResponse: ApiResponse<{ id: number; name: string }> = {
  success: true,
  data: { id: 1, name: "june" },
};

const errResponse: ApiResponse<null> = {
  success: false,
  error: "404 not found",
  data: null,
};

//제네릭 타입 제약
function printLength<T extends { length: number }>(val: T): void {
  console.log(val.length);
}

printLength("1");

export {};
