import React, { useEffect, useState } from 'react';

const Square = ({ value, onClick }) => {
    return (
        <div
            className="w-20 h-20 bg-blue-300 border-1 border-gray-800 cursor-pointer flex items-center justify-center text-3xl"
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
            <div className="flex">
                <div className="row">
                    <Square value={squares[0]} onClick={() => handleClick(0)} />
                    <Square value={squares[1]} onClick={() => handleClick(1)} />
                    <Square value={squares[2]} onClick={() => handleClick(2)} />
                </div>
                <div className="row">
                    <Square value={squares[3]} onClick={() => handleClick(3)} />
                    <Square value={squares[4]} onClick={() => handleClick(4)} />
                    <Square value={squares[5]} onClick={() => handleClick(5)} />
                </div>
                <div className="row">
                    <Square value={squares[6]} onClick={() => handleClick(6)} />
                    <Square value={squares[7]} onClick={() => handleClick(7)} />
                    <Square value={squares[8]} onClick={() => handleClick(8)} />
                </div>
            </div>
            {squares.some((square) => square !== '') && <h3 className="text-xl text-white">{status}</h3>}
            <button
                className="text-lg bg-white/80 px-9 py-3 rounded-xl cursor-pointer hover:bg-white/50 active:scale-95"
                onClick={handleRestart}
            >
                Restart
            </button>
        </div>
    );
};

export default TicTacToe;
