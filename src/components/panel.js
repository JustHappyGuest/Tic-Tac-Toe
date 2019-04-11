import React from 'react';

class Panel extends React.Component{
    render() {
        return(
            <div name="panel"  className="board__panel" onClick={(e) => this.props.onClick(e)}>
                <div name="new_game" className="board__item">
                    NEW GAME
                </div>
                <div name="history_show" className="board__item">
                    HISTORY
                </div>
            </div>
        );
    }
}

export default Panel;