import React from 'react';
import { managerClassesBEM } from '../../libs';

const Square = ({ index, tie, win, value, onClickSquare }) => {
    return (
        <div
            className={managerClassesBEM('board__square')({ 'tie': tie, 'win': win, 'active': !!value })}
            onClick={() => onClickSquare(index)}
        >
            {value}
        </div>
    )
}

export default Square;

