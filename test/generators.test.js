import {characterGenerator} from '../src/js/generators';
import {generateTeam} from '../src/js/generators';
import Bowman from '../src/js/Bowman';

test('test characterGenerator Bowman(1)', () => {
    const allowedTypes = [Bowman];
    const maxLevel = 1;
    const generator = characterGenerator(allowedTypes, maxLevel);
    const character = generator.next().value;
    const bowman = new Bowman(1);
    expect(character).toEqual(bowman);
  });


  test('test generateTeam Two Bowman(1)', () => {
    const allowedTypes = [Bowman];
    const maxLevel = 1;
    const team = generateTeam(allowedTypes, maxLevel, 2);
    const bowman = new Bowman(1);
    expect(team.length).toBe(2);
    expect(team[0]).toEqual(bowman);
    expect(team[1]).toEqual(bowman);
  });

