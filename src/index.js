import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import Panel from './components/panel';
import History from './components/history';
import './index.css';

class Game extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            historyShow: false,
            tie: false,
            currentPlayer : "X",
            win: {player: null, line: null},
            history: [
                Array(9).fill(null)
            ]
        }
    }

    handleClickSquare(i){
        let history = this.state.history;
        let squares = history[history.length - 1].slice();
        let currentPlayer = this.state.currentPlayer;
        let win = this.state.win;

        if(squares[i] || win.player)return;

        squares[i] = currentPlayer;

        history.push(squares);


        if(calculateWinner(squares)) {
            win = {player: currentPlayer, line: calculateWinner(squares)}
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";

        this.setState({
            tie: squares.every(item => !!item) && !win.player,
            currentPlayer: currentPlayer,
            win: win,
            history: history
        })

    }

    handleClickPanel(e){
        if(e.target.attributes.name.nodeValue === "new_game"){
            this.setState({
                historyShow: false,
                tie: false,
                currentPlayer : "X",
                win: {player: null, line: null},
                history: [
                    Array(9).fill(null)
                ]
            })
        }else if(e.target.attributes.name.nodeValue === "history_show" && this.state.history.length-1){
            this.setState({
                historyShow: !this.state.historyShow
            })
        }

    }

    handleClickHistoryItem(i){
        let history = this.state.history;
        history.length = i+1;

        this.setState({
            tie: false,
            win: {player: null, line: null},
            currentPlayer:(i+1)% 2 === 0 ? "O" : "X",
            history : history
        })

    }

    render(){
        return (
                <div className="board__wrapper">
                    <History show = {this.state.historyShow} count={this.state.history.length-1} onClick={(i)=>this.handleClickHistoryItem(i)}/>
                    <span className="board__status">
                        {this.state.tie ?
                            "Oops, we're tied " :
                            this.state.win.player ?
                                "Winner is " + this.state.win.player :
                                "Move " + this.state.currentPlayer}
                    </span>
                    <Panel onClick = {(e) => this.handleClickPanel(e)} />
                    <Board
                        tie = {this.state.tie}
                        win = {this.state.win.player ? this.state.win : null}
                        squares = {this.state.history[this.state.history.length - 1]}
                        onClick = {(i) => this.handleClickSquare(i)}
                    />
                </div>
            )
    }
}

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return lines[i];
        }
    }
    return null;
}