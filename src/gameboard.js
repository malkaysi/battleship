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
    for (i = 0; i < 8; i += 1) {
      gridItem.textContent = i;
      grid.appendChild(gridItem);
    }

    return grid;
  };

  const placeShips = () => {
    // Take a ship as a parameter
    // Use the length of the ship to place it within the board boundaries
    // Pass the assigned coordinates as the position of the ship
    // Selected coordinates can only have 3 row ids or 3 column numbers after one another
    // Within the boundary limits
  };

  return createBoard;
};

export default gameBoard;
