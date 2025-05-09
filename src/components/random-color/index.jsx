import React, { useEffect } from 'react';
import { useState } from 'react';

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#ffffff');
    const handleRandomColor = () => {
        const colorType = typeOfColor;
        if (colorType === 'hex') {
            const hexRange = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
            const hexColor = `#${Array.from(
                { length: 6 },
                () => hexRange[Math.floor(Math.random() * hexRange.length)]
            ).join('')}`;
            setColor(hexColor);
        } else if (colorType === 'rgb') {
            const getRandomValue = () => Math.floor(Math.random() * 256);
            const rgbColor = `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;
            setColor(rgbColor);
        }
    };
    useEffect(() => {
        handleRandomColor();
    }, [typeOfColor]);
    const textShadow = '3px 3px 6px rgba(0, 0, 0, 0.8)';
    return (
        <div className="wrapper p-5" style={{ backgroundColor: color, minHeight: '50vh' }}>
            <h2 className="text-4xl text-center my-5 text-white" style={{ textShadow: textShadow }}>
                Random Color Component Demo
            </h2>
            <div className="flex justify-center items-center flex-col gap-5">
                <div className="flex flex-row gap-5">
                    <div className="flex gap-2 items-center text-white" style={{ textShadow: textShadow }}>
                        <input
                            type="radio"
                            id="hex"
                            value="hex"
                            checked={typeOfColor === 'hex'}
                            onChange={() => setTypeOfColor('hex')}
                            className="w-6 h-6"
                        />
                        <label htmlFor="hex" className="text-xl">
                            HEX
                        </label>
                    </div>
                    <div className="flex gap-2 items-center text-white" style={{ textShadow: textShadow }}>
                        <input
                            type="radio"
                            id="rgb"
                            value="rgb"
                            checked={typeOfColor === 'rgb'}
                            onChange={() => setTypeOfColor('rgb')}
                            className="w-6 h-6"
                        />
                        <label htmlFor="rgb" className="text-xl">
                            RGB
                        </label>
                    </div>
                </div>
                <button
                    type="button"
                    className="block px-6 py-3 bg-blue-400 rounded-lg text-white cursor-pointer"
                    onClick={handleRandomColor}
                >
                    Generate Random Color
                </button>
            </div>
            {color && (
                <div
                    className="text-5xl text-white flex flex-col justify-center items-center mt-10"
                    style={{ textShadow: textShadow }}
                >
                    <h3>{`${typeOfColor === 'hex' ? 'HEX color' : 'RGB color'}`}</h3>
                    <p className="font-bold mt-5 text-white" style={{ textShadow: textShadow }}>
                        {color}
                    </p>
                </div>
            )}
        </div>
    );
};

export default RandomColor;
