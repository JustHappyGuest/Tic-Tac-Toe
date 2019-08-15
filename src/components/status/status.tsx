import React from 'react';

const Status = ({tie, win, currentPlayer}) => (
    <span className="board__status">
        {tie ?
            "Oops, we're tied " :
            win.player ?
                "Winner is " + win.player :
                "Move " + currentPlayer}
    </span>
);

export default Status;