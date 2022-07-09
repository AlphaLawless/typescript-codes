type Animal = {
  name: string;
}

type Human = {
  firstName: string;
  lastName: string;
}

// Think this is like a function, where `GetRequiredInformation` is the function and `<TType>` the argument
type GetRequiredInformation<TType> = TType extends Animal
  ? { age: number }
  : TType extends Human
  ? { socialSecurityNumber: number }
  : never;

export type RequiredInformationForAnimal =
  GetRequiredInformation<Animal>;

export type RequiredInformationForHuman =
  GetRequiredInformation<Human>;

export type RequiredInformationForAlien =
  GetRequiredInformation<{
    planet: string
  }>