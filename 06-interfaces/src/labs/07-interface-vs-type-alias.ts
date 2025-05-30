// [문제]
// 아래 두 코드에서 kimUser, yunUser 모두 { id: number; name: string } 구조를 가져야 하며, 타입 별칭과 인터페이스를 각각 이용해서 타입을 선언하세요.

type User = {
  id: number;
  name: string;
};

interface Uzer extends User {}

const kimUser: Uzer = { id: 10, name: "김유저" };
const yunUser: Uzer = { id: 20, name: "윤유저" };

// 아래 nabiCat, ggomaCat은 각각 "sound, color" 속성이 모두 필요하며
// 하나는 인터페이스 상속, 하나는 타입 별칭 교차(&)로 작성하세요.

type Nabi = {
  sound: string;
};

type Ggoma = Nabi & {
  color: string;
};

const nabiCat: Ggoma = { sound: "야옹", color: "고등어" };
const ggomaCat: Ggoma = { sound: "냐옹", color: "삼색이" };

export {};
