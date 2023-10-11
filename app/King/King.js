import Character from "../Character/Character.js";

class King extends Character {
  yearsOfReign;

  constructor(characterName, yearsInThrone) {
    super(characterName);
    this.yearsOfReign = yearsInThrone;
  }

  communication() {
    return `${super.communication()}. You are all gonna die.`;
  }
}

export default King;
