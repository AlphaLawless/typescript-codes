function compose(...args: any[]) {
  return {} as any;
}

const addOne = (a: number) => {
  return a + 1;
};

const numToString = (a: number) => {
  return a.toString();
};

const stringToNum = (a: string) => {
  return parseInt(a);
};

export const addOneToString = compose(
  addOne,
  numToString,
  stringToNum
);
