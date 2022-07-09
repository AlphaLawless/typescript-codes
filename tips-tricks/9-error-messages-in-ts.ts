export const deepEqualCompare = <Arg>(
  a: Arg extends any[] ? 'Você não pode passar um array aqui' : Arg,
  b: Arg extends any[] ? 'Você não pode passar um array aqui' : Arg
): boolean => {
  // if (Array.isArray(a) || Array.isArray(b)) {
  //   throw new Error(
  //     "You cannot compare two arrays using deepEqualCompare"
  //   );
  // }
  return a === b;
};

deepEqualCompare([],[]) // ❌
deepEqualCompare(2, 2) // ✅
