import React, { useState } from 'react';

const CustomTabs = ({ tabsContent, onChange }) => {
    const [currTabIndex, setCurrTabIndex] = useState(0);

    const handleClick = (index) => {
        setCurrTabIndex(index);
        onChange(index);
    };

    return (
        <div className="wrapper p-5 bg-slate-800 flex flex-col gap-4 justify-center items-center">
            <h2 className="text-4xl text-white">Custom Tabs Demo</h2>
            <div className="text-white cursor-pointer flex">
                {tabsContent.map((tabItem, idx) => (
                    <div
                        key={idx}
                        className={`tabs p-2 ${idx === currTabIndex ? 'bg-amber-900' : 'bg-amber-800'} ${
                            idx < tabsContent.length - 1 ? 'border-r-1 border-slate-300' : ''
                        }`}
                        onClick={() => handleClick(idx)}
                    >
                        <span className="label">{tabItem.label}</span>
                    </div>
                ))}
            </div>
            <div className="text-white">{tabsContent[currTabIndex] && tabsContent[currTabIndex].content}</div>
        </div>
    );
};

export default CustomTabs;
