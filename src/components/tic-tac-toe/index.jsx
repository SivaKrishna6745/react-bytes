import React, { useEffect, useState } from 'react';

const Square = ({ value, onClick }) => {
    return (
        <div
            className="w-20 h-20 bg-blue-300 cursor-pointer rounded-md flex items-center justify-center text-3xl"
            onClick={onClick}
        >
            {value}
        </div>
    );
};

const TicTacToe = () => {
    const [squares, setSquares] = useState(Array(9).fill(''));
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState('');

    const handleClick = (currSquare) => {
        let squaresCopy = [...squares];
        if (getWinner(squares) || squaresCopy[currSquare]) return;
        squaresCopy[currSquare] = isXTurn ? 'X' : 'O';
        setIsXTurn(!isXTurn);
        setSquares(squaresCopy);
    };

    const getWinner = (squares) => {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < winningPatterns.length; i++) {
            const [x, y, z] = winningPatterns[i];
            if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
                return squares[x];
            }
        }
        return null;
    };

    useEffect(() => {
        if (!getWinner(squares) && squares.every((square) => square !== '')) {
            setStatus('This is a Draw! Please restart the game.');
        } else if (getWinner(squares)) {
            setStatus(`Winner is ${getWinner(squares)}. Please restart the game`);
        } else {
            setStatus(`Next Player is ${isXTurn ? 'X' : 'O'}`);
        }
    }, [squares, isXTurn]);

    const handleRestart = () => {
        setIsXTurn(true);
        setSquares(Array(9).fill(''));
        setStatus('');
    };

    return (
        <div className="wrapper p-5 bg-green-800 flex flex-col items-center gap-8">
            <h2 className="text-4xl text-white">Tic-Tac-Toe Demo</h2>
            <div className="grid grid-cols-3 gap-2">
                {squares.map((value, idx) => (
                    <Square key={idx} value={value} onClick={() => handleClick(idx)} />
                ))}
            </div>
            {squares.some((square) => square !== '') && <h3 className="text-xl text-white">{status}</h3>}
            {(getWinner(squares) || squares.every((square) => square !== '')) && (
                <button
                    className="text-lg bg-white/80 px-9 py-3 rounded-xl cursor-pointer hover:bg-white/50 active:scale-95"
                    onClick={handleRestart}
                >
                    Restart
                </button>
            )}
        </div>
    );
};

export default TicTacToe;
