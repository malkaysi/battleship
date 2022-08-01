// When a user clicks on the gameboard position and it matches the ship position
// That should be marked as a hit and change the color of the cell
// The ship records that position as hit

const createShip = (length, position) => {
  let health = length;

  const sinkShip = () => {
    // Need to decide what to do here
    // Send a message that your ship was sunk
  };

  const hitShip = () => {
    health -= 1;
    if (health <= 0) {
      sinkShip();
    }
  };

  return {
    get health() {
      return health;
    },
    length,
    position,
    hitShip,
  };
};

export default createShip;
