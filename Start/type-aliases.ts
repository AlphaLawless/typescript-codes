// Type Alias or Union of types

type Uid = number | string | undefined;

function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}.`);
}

function logInfo(uid: Uid, user: string) {
  console.log(`An user with ${uid} has a name as ${user}.`);
}

logDetails(123, "short");
logDetails("123", "clock");

logInfo(123, "Alpha");
logInfo("123", "Vylly");

// Defining what will be inside the type

type Plataform = "Windows" | "Linux" | "MacOs";

function renderPlataform(plataform: Plataform) {
  return plataform;
}

renderPlataform("MacOs");
