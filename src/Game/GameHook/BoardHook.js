import React from 'react'
import Square from '../Square'

const BoardHook = (props) => {
    const renderSquare = (i) => {
        return <Square
            value={props.squares[i]}
            onClick={() => props.onClick(i)}
        />;
    }

    return (
        <div className="p-5">
            <div className="">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default BoardHook;