// All basic declared types of the TypeScript

//boolean (true / false)
let isOpen: boolean;
isOpen = true;

//string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

//number (int, float, hex, binary)
let total: number;
total = 0xff0;

//array (type[])
let items: string[];
items = ["foo", "bar", "..."];

//tuple ([type1, type2, type3])
let title: [number, string, boolean];
title = [1, "foo", true];

//enum
enum Colors {
  white = "fff",
  black = "000",
}

// any (anything), no recommended. You can disable `any` in TS just enable `noImpliciAny: true` in tsconfig.json
let anything: any;
anything = [1];

//void (function no return)
function logger(): void {
  console.log("foo");
}

// null | undefined e.g.
type Dah = string | undefined;
// Not use null and undefined in variables.

// never (never return)
function error(): never {
  throw new Error("error");
}

// object ({ key: "sha-1" }), is anything which not is primitive types.
let cript: object;
cript = {
  key: "sha-1",
};
