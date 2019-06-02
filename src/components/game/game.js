import React from 'react';

import Board from '../board';
import Panel from '../panel';
import History from '../history/';
import Status from '../status';
import {withEventsFunctions} from '../../hoc-helpers';

const Game = ({state: {historyShow, history, tie, win, currentPlayer}, onClickHistoryItem, onNewGame, onHistoryShow, onClickSquare}) => {
    return (
        <div className="board__wrapper">
            <History
                show={historyShow}
                count={history.length - 1}
                onClickHistoryItem={onClickHistoryItem}
            />
            <Status
                tie={tie}
                win={win}
                currentPlayer={currentPlayer}
            />
            <Panel
                onNewGame={onNewGame}
                onHistoryShow={onHistoryShow}
            />
            <Board
                tie={tie}
                win={win.player ? win : null}
                squares={history[history.length - 1]}
                onClickSquare={onClickSquare}
            />
        </div>
    )
}

const initialState = {
    historyShow: false,
    tie: false,
    currentPlayer: "X",
    win: { player: null, line: null },
    history: [
        Array(9).fill(null)
    ]
}

export default withEventsFunctions(initialState)(Game);

