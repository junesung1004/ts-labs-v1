// 객체
let user: { id: number; name: string } = {
  id: 1,
  name: "june",
};

let student: {
  name: string;
  age: number;
  scores: [string, number][];
};

student = {
  name: "june",
  age: 20,
  scores: [
    ["자바스크립트", 50],
    ["타입스크립트", 50],
  ],
};

// 선택적 프로퍼티
let product: {
  id: number;
  name: string;
  price: number;
  description?: string;
};

product = {
  id: 1,
  name: "아이폰16",
  price: 180000,
};

// readonly 속성
let order: {
  userId: number;
  status: string;
  amount: number;
  readonly createAt: string;
};

order = {
  userId: 1,
  status: "배송중",
  amount: 1500000,
  createAt: "2025년 5월 29일",
};

order.status = "배송완료";
