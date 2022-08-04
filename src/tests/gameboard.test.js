// Gameboard should be able to assign positions for specific ships
// Ships should be placed sequetially based on the length
// Either the column or row.
// Column: 0, 10, 20 for length of 3
// Row: 0, 1 ,2 for length of 3
// Cannot pass grid boundaries

import gameBoard from "../gameboard";

describe('gameboard tests', () => {
  beforeEach(() => {
    const playerGameBoard = gameBoard();
    document.body.appendChild(playerGameBoard.createBoard());
  });

  it('randomly places ships on the board', () => {
    // ship should have the same ids as the cells it's placed in
    // The color of the cells should change
    // It should be in sequential order
    gameBoard.placeShip(DESTROYER);
  });
});
