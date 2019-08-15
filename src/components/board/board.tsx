import React from 'react';
import Square from "../square";


const Board = ({squares, win, tie, onClickSquare}) => {
    let squaresRender = squares.map((item, i) => {
        return <Square key={i}
            index={i}
            value={item}
            win={win && win.line.includes(i)}
            tie={tie}
            onClickSquare={onClickSquare}
        />
    });

    return (
        <div className="board" >
            {squaresRender}
        </div>
    )
}

export default Board