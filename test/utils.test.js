import {calcTileType} from '../src/js/utils';

test('test calcTileType 0', () => {
  expect(calcTileType(0)).toBe('top-left');
});

test('test calcTileType 7', () => {
    expect(calcTileType(7)).toBe('top-right');
});

test('test calcTileType 56', () => {
    expect(calcTileType(56)).toBe('bottom-left');
});

test('test calcTileType 63', () => {
    expect(calcTileType(63)).toBe('bottom-right');
});

test('test calcTileType 15', () => {
    expect(calcTileType(15)).toBe('right');
});

test('test calcTileType 16', () => {
    expect(calcTileType(16)).toBe('left');
});

test('test calcTileType 1', () => {
    expect(calcTileType(1)).toBe('top');
});

test('test calcTileType 60', () => {
    expect(calcTileType(60)).toBe('bottom');
});

test('test calcTileType 25', () => {
    expect(calcTileType(25)).toBe('center');
});
