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

    const [stepNumber, setStepNumber] = useState(0);


    const current = history[stepNumber];
    const winner = CalculateWinner(current.squares);
    const moves = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });
    const handleClick = (i) => {

        const historySlice = history.slice(0, stepNumber + 1);
        console.log(historySlice);

        // const currentSlice = historySlice[historySlice.length - 1];
        const squares = current.squares;
        if (CalculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? 'X' : 'O';

        console.log(historySlice.concat([{squares: squares,}]));

        setHistory(historySlice.concat([{squares: squares,}]))


        setXIsNext(!xIsNext)
        setStepNumber(history.length)
    }

    const jumpTo = (move) => {
        setXIsNext((move % 2) === 0);
        setStepNumber(move)
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