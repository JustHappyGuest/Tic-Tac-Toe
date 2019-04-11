import React from 'react';

class Square extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hover: false
        }
    }

    setStateClassName = (className) => {
        return function(state){
            return state ? className + " " + className+"-"+state : className;
        }
    }


    render(){
        let setStateBoardSquare = this.setStateClassName("board__square");

        return (
            <div
                className = {this.props.tie ?
                                setStateBoardSquare("tie"):
                                this.props.win ?
                                    setStateBoardSquare("win")  :
                                    this.props.value ?
                                        setStateBoardSquare("active") :
                                        setStateBoardSquare()}
                onClick = {() => this.props.onClick(this.props.index)}
            >
                {this.props.value}
            </div>
        )
    }
}

export default Square;

