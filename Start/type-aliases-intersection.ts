// accountInfo
// charInfo

// param?: => Interrogation means that param is optional, so you don't need to add it.
type AccountInfo = {
  id: number;
  name: string;
  email?: string;
};

const account: AccountInfo = {
  id: 123,
  name: "Alpha",
};

type CharInfo = {
  nickname: string;
  level: number;
};

const char: CharInfo = {
  nickname: "alphalawless",
  level: 100,
};

// Intersection of types (AccountInfo + CharInfo).

type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: 123,
  name: "kira",
  nickname: "kir4",
  level: 100,
};
