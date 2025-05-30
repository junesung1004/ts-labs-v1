// 1. 유니온 타입 '|'
// 여러 타입 중 하나

let value: number | string | boolean = 2;
value = "hello";
value = true;

// 2. 인터섹션 타입 '&'
type Person = { name: string };
type Developer = { skills: string[] };
type DevOrPerson = Person | Developer;
type DevPerson = Person & Developer;

const personA: DevOrPerson = {
  name: "june",
};

const personB: DevPerson = {
  name: "june",
  skills: ["html"],
};

export {};
