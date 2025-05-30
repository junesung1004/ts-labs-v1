// 타입 별칭 = type alias
// 복잡하거나 반복적으로 사용되는 타입에 별칭을 붙여서 재사용하는 문법
let user3: {
  name: string;
  age: number;
};

user3 = {
  name: "june",
  age: 13,
};

// 타입 별칭 선언언
type User = {
  name: string;
  age: number;
};

let user4: User = {
  name: "kim",
  age: 13,
};
