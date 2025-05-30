// 인터페이스

// 1. 인터페이스 선언

type Uzer = {
  id: number;
  name: string;
  email?: string;
};

interface User {
  id: number;
  name: string;
  email?: string;
}

interface User {
  readonly created: Date;
}

const userA: User = {
  id: 1,
  name: "june",
  created: new Date(),
};

function printUser(user: User) {}

// 2. 함수에서의 인터페이스
interface Add {
  (a: number, b: number): number;
}

type Add2 = (a: number, b: number) => number;

// 객체 : 인터페이스
// 함수 및 기타 : 타입 별칭

// 3. 인터페이스 확장 (= 상속)
interface ApiResponse {
  success: boolean;
  message?: string;
}

interface UserResponse extends ApiResponse, AdditionalInfo {
  user: {
    id: string;
    name: string;
  };
}

type AdditionalInfo = {
  info: string;
};

interface ProductResponse extends ApiResponse {
  product: {
    id: string;
    name: string;
    price: number;
  };
}

let userResponse: UserResponse = {
  success: true,
  message: "성공",
  user: { id: "1", name: "june" },
  info: "something",
};

// 4. 인덱스 시그니처
// 키 : 값 구조
// 객체의 속성명이 동적으로 추가할 수 있게 사용할 수 있는 문법
interface StringMap {
  [key: string]: string;
}

const colors: StringMap = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
};
export {};
