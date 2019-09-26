import React from 'react';

import Game from './game';

import './app.css';

import { withEventsFunctions } from './core/hoc-helpers';

const App = ({ state, onClickSquare }) => {
  return (
    <div className="board__wrapper">
      <Game state={state} onClickSquare={onClickSquare} />
    </div>
  );
};

const initialState = {
  historyShow: false,
  tie: false,
  currentPlayer: 'X',
  win: { player: null, line: null },
  history: [Array(9).fill(null)],
};

export default withEventsFunctions(initialState)(App);
