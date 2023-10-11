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
}

export default Character;
