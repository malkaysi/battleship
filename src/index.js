import _ from 'lodash';
import gameBoard from './gameboard';
import './style.css';

/* function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
} */
const playerGameBoard = gameBoard();

// document.body.appendChild(component());
document.body.appendChild(playerGameBoard.createBoard());
