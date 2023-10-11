import Character from "../Character/Character.js";

class King extends Character {
  yearsOfReign;

  communication() {
    return `${super.communication()}. You are all gonna die.`;
  }
}

export default King;
