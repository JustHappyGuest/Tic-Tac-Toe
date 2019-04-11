import React from 'react';

class History extends React.Component{
    render(){
        let items = Array(this.props.count).fill(null).map((item, i)=>{
            return <a
                        key={i}
                        className="board__history-item"
                        onClick={()=>this.props.onClick(i+1)}
                    >
                        #STEP {i+1}
                    </a>
        });
        return (
            <div className={this.props.show ? "board__history" : "board__history board__history-hidden"}>
                {items}
            </div>
        )
    }
}

export default History;