// Type Alias

// Content:
type GameT = {
  title: string;
};

type DLCT = {
  extra: string;
};

// Intersection:

type GameCollectionT = GameT & DLCT;

// implements

class CreateGameT implements GameCollectionT {}

// declare function

type getSimilarsT = (title: string) => void;

// ===================================================== //

// Interfaces

// Content:
interface IGame {
  title: string;
}

interface IDLC {
  extra: string;
}

// Intersection | extend:

interface IGameCollection extends IGame, IDLC {}

// Implements

class CreateNewGame implements IGameCollection {}

// declare function.

interface IGetSimilars {
  (title: string): void;
}

//================Differences between Type and Interface===============//

// Types x Interface.

// Types : You can declare primitive types.

type IDT = string | number; // ✅

// Inteface : You can't add primitive types.

interface IDT extends number {} // ❌

// ------------------------------------- //

// Types x Interface

// Types : you can declare tuples normally.

type TupleT = [number, number];

[1, 2, 3] as TupleT; // error ✅

// Inteface : You can't add tuple normally.

interface ITuple {
  0: number;
  1: number;
}

[1, 2, 3] as ITuple; // not error ❌

// ------------------------------------- //

// Types x Interface

// Types : Only a declaration for scope.

type JQueryT = { a: string };
type JQueryT = { b: string }; // ❌

// Interface : Allows you to extend the same name.

interface IJQuery {
  a: string;
}

interface IJQuery {
  b: string;
}

const $ab: IJQuery = {
  a: "foo",
  b: "bar",
}; // ✅

// Inteface Advantage : You can create libraries easily using interface so that user can extend in project. ( Objects / Classes (OOP) )

// Types Advantage : You can start with types (alias) because they are simpler to use primitive types. ( React - Props use types )
