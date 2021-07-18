import React, {useEffect, useState} from 'react'
import BoardHook from './BoardHook'
import CalculateWinner from '../CalculateWinner'

const GameHook = () => {
    const historyInit = [{
        squares: Array(9).fill(null),
    }]

    const [history, setHistory] = useState(historyInit)
    const [xIsNext, setXIsNext] = useState(true)

    const [status, setStatus] = useState('Next player: ' + (xIsNext ? 'X' : 'O'));

    const current = history[history.length - 1];
    const winner = CalculateWinner(current.squares);

    const moves = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li>
                <button>{desc}</button>
            </li>
        );
    });

    const handleClick = (i) => {
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (CalculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory(history.concat([{squares: squares,}]))
        setXIsNext(!xIsNext)
    }

    useEffect(()=>{
        if (winner) {
            setStatus('Winner: ' + winner);
        } else {
            setStatus('Next player: ' + (xIsNext ? 'X' : 'O'));
        }
    },[xIsNext, winner]);

    return (
        <div className="flex flex-row">
            <div className="">
                <BoardHook
                    squares={current.squares}
                    onClick={(i) => handleClick(i)}
                />
            </div>
            <div className="">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );

}


export default GameHook;