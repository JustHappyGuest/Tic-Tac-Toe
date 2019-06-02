import React from 'react';

const History = ({count, show, onClickHistoryItem}) => {
    let renderItems = Array(count).fill(null).map((item, i) => {
        return <a
            key={i}
            className="board__history-item"
            onClick={() => onClickHistoryItem(i + 1)}
        >
            #STEP {i + 1}
        </a>
    });
    return (
        <div className={show ? "board__history" : "board__history board__history-hidden"}>
            {renderItems}
        </div>
    )
}

export default History;