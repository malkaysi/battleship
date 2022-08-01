import createShip from '../ship';

test('creates a ship', () => {
  const ship = createShip(3, [[0, 1], [0, 2], [0, 3]]);
  expect(ship)
    .toEqual(expect.objectContaining({ health: 3, length: 3, position: [[0, 1], [0, 2], [0, 3]] }));
});

test('hits ship', () => {
  const ship = createShip(3, [[0, 1], [0, 2], [0, 3]]);
  ship.hitShip();
  expect(ship.health).toBe(2);
});
