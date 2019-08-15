import React, { Component } from 'react';

import { calculateWinner } from '../libs';

const withEventsFunctions = (state) => (View) => (
    class extends Component {

        state = state;

        onClickSquare = (i) => {
            let history = this.state.history;
            let squares = history[history.length - 1].slice();
            let currentPlayer = this.state.currentPlayer;
            let win = this.state.win;

            if (squares[i] || win.player) return;

            squares[i] = currentPlayer;

            history.push(squares);


            if (calculateWinner(squares)) {
                win = { player: currentPlayer, line: calculateWinner(squares) }
            }

            currentPlayer = currentPlayer === "X" ? "O" : "X";

            this.setState({
                tie: squares.every(item => !!item) && !win.player,
                currentPlayer: currentPlayer,
                win: win,
                history: history
            })

        }

        onNewGame = () => {
            this.setState({
                historyShow: false,
                tie: false,
                currentPlayer: "X",
                win: { player: null, line: null },
                history: [
                    Array(9).fill(null)
                ]
            })
        }

        onHistoryShow = () => {
            this.setState({historyShow: !this.state.historyShow})
        }



        onClickHistoryItem = (i) => {
            const history = this.state.history;
            history.length = i + 1;

            this.setState({
                tie: false,
                win: { player: null, line: null },
                currentPlayer: (i + 1) % 2 === 0 ? "O" : "X",
                history
            })
        }

        render() {
            return (
                <View
                    state={this.state}
                    onNewGame={this.onNewGame}
                    onClickSquare={this.onClickSquare}
                    onHistoryShow={this.onHistoryShow}
                    onClickHistoryItem={this.onClickHistoryItem}
                />
            );
        };
    }
);

export default withEventsFunctions;