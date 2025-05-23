import React, { useState } from 'react';

const LightDarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div
            className={`wrapper p-5 ${
                theme === 'light' ? 'bg-white' : 'bg-black'
            } flex flex-col gap-4 justify-center items-center`}
        >
            <h2 className={`text-4xl ${theme === 'light' ? 'text-black' : 'text-white'}`}>Light Dark Mode Demo</h2>
            <p className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>Hello World!</p>
            <button onClick={toggleTheme} className="cursor-pointer">
                <box-icon
                    name={theme === 'light' ? 'sun' : 'moon'}
                    color={`${theme === 'light' ? 'black' : 'white'}`}
                ></box-icon>
            </button>
        </div>
    );
};

export default LightDarkMode;
