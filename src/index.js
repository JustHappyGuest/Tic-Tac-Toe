import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hover: false
        }
    }

    handleMouseEnter(){
        this.setState({hover: true});
    }

    handleMouseLeave(){
        this.setState({hover: false});
    }


    render(){
        return (
            <div
                className = {this.props.value ? "board__square board__square-active" : this.state.hover ? "board__square board__square-hover" : "board__square"}
                onMouseEnter={() => this.handleMouseEnter()}
                onMouseLeave={() => this.handleMouseLeave()}
                onClick = {() => this.props.onClick(this.props.index)}
            >
                {this.props.value}
            </div>
        );
    }
}

class Board extends React.Component{


    render(){
        let squares = this.props.squares.map((item, i) => {
            return <Square key = {i}
                           index = {i}
                           value =  {item}
                           onClick = {(i) => this.props.onClick(i)}
                    />
        });

        return (
            <div
                className = "board"
            >
                {squares}
            </div>
        );
    }
}

class Game extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            history: {
                currentPlayer : "X",
                squares : [Array(9).fill(null)]
            }

        }
    }

    handleClick(i){

        let history = this.state.history;
        let squares = history.squares[history.squares.length - 1].slice();

        if(squares[i])return;

        squares[i] = history.currentPlayer;
        history.squares.push(squares);
        history.currentPlayer = history.currentPlayer === "X" ? "O" : "X";

        this.setState({
            history: history
        })
    }

    render(){
        return (
                <div className="board__wrapper">
                    <Board
                        squares = {this.state.history.squares[this.state.history.squares.length - 1]}
                        onClick = {(i) => this.handleClick(i)}
                    />
                </div>
            );
    }
}

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(){

}