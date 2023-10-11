class Character {
  name;
  family;
  age;
  isAlive = true;
  filmSeries = "Game of Thrones";

  constructor(characterName) {
    this.name = characterName;
  }

  die() {
    this.isAlive = false;
  }

  comunication() {
    return `I'm ${this.name} from ${this.name}'s family`;
  }
}

export default Character;
