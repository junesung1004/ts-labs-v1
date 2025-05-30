// 열거형 (enum)
// 정해진 값들만 사용하는 타입
// 자바스크립트에 없는 문법

// 왜써요?
// (1) 오류 방지
// (2) 가독성 향상
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

let user1: {
  name: string;
  role: Role;
};

user1 = {
  name: "june",
  role: Role.USER,
};

enum Status {
  Pending = "pending",
  Success = "success",
  Reject = "reject",
}
