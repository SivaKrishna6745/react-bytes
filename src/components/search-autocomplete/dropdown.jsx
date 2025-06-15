import React from 'react';

const Dropdown = ({ userData, show, click }) => {
    return (
        <ul className={`mt-4 transition-all duration-300 ${show ? 'translate-y-0' : '-translate-y-4'}`}>
            {userData?.map((user, idx) => (
                <li
                    key={idx}
                    className={`p-4 text-xl cursor-pointer hover:bg-blue-500 hover:text-white border-b border-gray-400 backdrop-blur-sm ${
                        idx % 2 === 0 ? 'bg-gray-400/80 text-black/70' : 'bg-gray-500/80 text-black/80'
                    }`}
                    onClick={click}
                >
                    {user}
                </li>
            ))}
        </ul>
    );
};

export default Dropdown;
