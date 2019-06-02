import React from 'react';

const Panel = ({onNewGame, onHistoryShow}) => (
    <div className="board__panel">
        <button className="board__item" onClick={onNewGame}>
            NEW GAME
        </button>
        <button className="board__item" onClick={onHistoryShow}>
            HISTORY
        </button>
    </div>
)

export default Panel;