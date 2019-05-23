import {characterGenerator} from '../src/js/generators';
import {generateTeam} from '../src/js/generators';
import Bowman from '../src/js/Bowman';
import Swordsman from '../src/js/Swordsman';

test('test characterGenerator', () => {
    const allowedTypes = new Set([Bowman]);
    const maxLevel = 1;
    const generator = characterGenerator(allowedTypes, maxLevel);
    const character = generator.next().value;
    const bowman = new Bowman(1);
    expect(character).toEqual(bowman);
  });

