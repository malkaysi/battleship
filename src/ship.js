// Ship factory function
// Object that should include length, where they've been hit, and whether they've sunk

// They are placed on a gameboard that has coordinates
// Coordinates are assigned to the ship based on its length

// If a coordinate matches the ship, it's a hit
// Once all the coordinates are hit, it's sunk
// Coordinates cannot be clicked twice

const createShip = (player, length, position) => {
  return { player, length, position }
};

export default createShip;