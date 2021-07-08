import React from 'react'
import Board from './Board'

class Game extends React.Component {
    render() {
        return (
            <div className="flex flex-row">
                <div className="">
                    <Board />
                </div>
                <div className="">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

export default Game;