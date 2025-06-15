import React from 'react';

const Square = () => {
    return <div className="w-20 h-20 bg-blue-300 border-1 border-gray-800"></div>;
};

const TicTacToe = () => {
    return (
        <div className="wrapper p-5 bg-green-500 flex flex-col items-center gap-8">
            <h2 className="text-4xl text-white">Tic-Tac-Toe Demo</h2>
            <div className="flex">
                <div className="row">
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div className="row">
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div className="row">
                    <Square />
                    <Square />
                    <Square />
                </div>
            </div>
        </div>
    );
};

export default TicTacToe;
