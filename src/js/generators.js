/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  var randIndex = Math.floor(Math.random() * allowedTypes.size);
  var randLevel = Math.floor(Math.random() * maxLevel);
  yield new allowedTypes[randIndex](randLevel);
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const team = new Array();
  const generator = characterGenerator(allowedTypes, maxLevel);
  for (let i = 0; i < characterCount.length; i += 1) {
    team.push(generator.next().value);
  }
  return team;
}
