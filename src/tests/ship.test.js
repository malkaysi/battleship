import createShip from '../ship.js';
// const createShip = require('../ship.js');


test('creates a ship', () => {
  const ship = createShip('AI', 3, [[0,1], [0,2], [0,3]]);
  expect(ship).toEqual({ player: 'AI', length: 3, position: [[0,1], [0,2], [0,3]] });
});