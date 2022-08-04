import shipTypes from "./models";

const gameBoard = () => {
  const createBoard = () => {
    // Creates the actual gameboard
    // Start off with only one board
    // Eventually create a board specific to the User and AI
    // AI ship placement should be hidden
    const grid = document.createElement('div');
    grid.classList.add('grid-container');

    const gridItem = document.createElement('div');
    let i = 0;
    for (i = 0; i < 100; i += 1) {
      gridItem.setAttribute('id', i);
      grid.appendChild(gridItem.cloneNode(true));
    }

    return grid;
  };

  const placeShips = (type, length) => {
    // Take a ship as a parameter
    // Use the length of the ship to place it within the board boundaries
    // Pass the assigned coordinates as the position of the ship
    // Selected coordinates can only have 3 row ids or 3 column numbers after one another
    // Within the boundary limits
  };

  shipTypes.map((shipType) => (
    placeShips(shipType.type, shipType.length)
  ));

  return { createBoard };
};

export default gameBoard;
