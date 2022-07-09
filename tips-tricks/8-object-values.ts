type Obj = {
  a: 'a';
  b: 'b';
  c: 'c';
};

type TransformObjectValues<TObj> = any;

export type ObjValues = TransformObjectValues<Obj>;
