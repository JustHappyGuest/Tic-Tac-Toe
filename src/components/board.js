import React from 'react';
import Square from "./square";

class Board extends React.Component{
    render(){
        let squares = this.props.squares.map((item, i) => {
            return <Square key = {i}
                           index = {i}
                           value =  {item}
                           win = {this.props.win && this.props.win.line.includes(i)}
                           tie = {this.props.tie}
                           onClick = {(i) => this.props.onClick(i)}
            />
        });

        return (
            <div
                className = "board"
            >
                {squares}
            </div>
        )
    }
}

export default Board