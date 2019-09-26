import React from 'react';

import Status from './status';
import Board from './board';

const Game = ({ state: { history, tie, win, currentPlayer }, onClickSquare }) => (
  <>
    <Status tie={tie} win={win} currentPlayer={currentPlayer} />
    <Board
      tie={tie}
      win={win.player ? win : null}
      squares={history[history.length - 1]}
      onClickSquare={onClickSquare}
    />
  </>
);

export default Game;
