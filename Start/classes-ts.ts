// Abstract classes are only models to other classes. You can't create a new instance for it.
abstract class UserAccount {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`);
  }
}

// Heritage
class CharAccount extends UserAccount {
  // Modfiers (Public, Private, Protected, Readonly)
  // Private and Public Principles
  private nickname: string;
  // Readonly, is similar to const.
  // readonly level: number;
  level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }
  // Accessors (Get and Set)
  get getLevel() {
    return this.level;
  }

  set setLevel(level: number) {
    this.level = level;
  }

  logCharDetails(): void {
    console.log(
      `The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}.`
    );
  }
}

// const will = new UserAccount("Alpha", 21);

const johnny = new CharAccount("Johnny", 30, "mynameisjohnny", 95);
johnny.logDetails();

//set

johnny.setLevel = 540;
