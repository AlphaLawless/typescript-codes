// Interface: A data structure to describe an object.

interface IGame {
  // Modifies in Interface (Readonly)
  id?: string | undefined;
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[];
  getSimilars?: (title: string) => void;
}

const game1: IGame = {
  title: "The Last of Us",
  description: "The best game in the world",
  genre: "Action",
  platform: ["PS3", "PS4"],
  getSimilars: (title: string) => {
    console.log(
      `Similar games to ${title}: Uncharted, A Plague Tale, Metro...`
    );
  },
};

if (game1.getSimilars) {
  game1.getSimilars(game1.title);
}

// Extends a father interface

interface DLC extends IGame {
  originalGame: IGame;
  newContent: string[];
}

const leftBehind: DLC = {
  title: "The Last of Us - Left Behind",
  description: "You play as Ellie before the original game",
  genre: "Action",
  platform: ["PS4"],
  originalGame: game1,
  newContent: ["3 hours story", "new charactere"],
};

// Implements interface in classes
class CreateGame implements IGame {
  title: string;
  description: string;
  genre: string;

  constructor(t: string, d: string, g: string) {
    this.title = t;
    this.description = d;
    this.genre = g;
  }
}
