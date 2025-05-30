// 타입 좁히기 (type Narrowing)

function printSomething(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed());
  }
}

// 타입 패턴 좁히기
// (1) typeof
// (2) null checks
// (3) in
// (4) discriminated union ( = tagged union)
// (5) 타입 가드 함수
// (6) instanceof

// 2. null checks
// 선택적 매개변수
// api -> user (x)
type User = { id: number; name: string; email?: string };

function printUserProfile(user?: User) {
  if (!user) {
    return;
  }

  if (user.email) {
    console.log(`id : ${user.id}, 이름 : ${user.name}, 이메일 : ${user.email}`);
  } else {
    console.log(`id : ${user.id}, 이름 : ${user.name}`);
  }
}

printUserProfile({ id: 1, name: "june" });

// 3. in vs 디스크리미네이티드 유니온(태그 유니온, 서로소 유니온)
type SuccessResponse = { ok: true; data: string };
type ErrorResponse = { ok: false; error: string };
type ApiResponse = SuccessResponse | ErrorResponse;

// 디스크리미네이티드 예시
function handleResponse(response: ApiResponse) {
  if (response.ok) {
    console.log(response.data);
  } else {
    console.log(response.error);
  }
}

// in 예시
type SuccessResponse2 = { data: string };
type ErrorResponse2 = { error: string };
type ApiResponse2 = SuccessResponse2 | ErrorResponse2;

function handleResponse2(response: ApiResponse2) {
  if ("data" in response) {
    console.log(response.data);
  } else {
    console.log(response.error);
  }
}

// 타입 가드 함수
type Guest = { kind: "guest"; visitReason: string };
type Member = { kind: "member"; memberId: string };
type Person = Guest | Member;

// 특수 문법 : is
// person이 Member면 true면 얘는 Member야! 라고 알려준다
function isMember(person: Person): person is Member {
  return person.kind === "member";
}

function printPersonInfo(person: Person) {
  if (isMember(person)) {
    //회원
    console.log(`회원 ID : ${person.memberId} `);
  } else {
    //멤버
    console.log(`방문 이유 : ${person.visitReason} `);
  }
}

export {};
