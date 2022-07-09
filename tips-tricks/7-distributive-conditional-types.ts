export type Letters = "a" | "b" | "c";

type RemoveC<TType> = any;

type WithoutC = RemoveC<Letters>;
