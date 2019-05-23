/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  const randIndex = Math.floor(Math.random() * allowedTypes.length);
  const randClass = allowedTypes[randIndex];
  const randLevel = Math.floor(Math.random() * maxLevel) + 1;
  const CharacterClass = dynamicClass(randClass);
  yield new CharacterClass(randLevel);
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const team = new Array();
  for (let i = 0; i < characterCount; i += 1) {
    const generator = characterGenerator(allowedTypes, maxLevel);
    team.push(generator.next().value);
  }
  return team;
}

export function dynamicClass(characterClass) {
  return characterClass;
}
