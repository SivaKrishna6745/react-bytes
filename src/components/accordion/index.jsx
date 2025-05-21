import React, { useState } from 'react';
import data from './data';

const Accordion = () => {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);
    const handleSingleSelection = (currId) => {
        setSelected(selected === currId ? null : currId);
    };
    const handleMultiSelection = (currId) => {
        setMultiple((prevState) =>
            prevState.includes(currId) ? prevState.filter((item) => item !== currId) : [...prevState, currId]
        );
    };

    return (
        <div className="wrapper min-h-screen bg-gradient-to-r from-teal-300 to-indigo-300 overflow-hidden">
            <div className="accordion mt-10 mx-5">
                <h2 className="text-4xl text-center my-5">Accordion with Single Selection and Mutli Selection Demo</h2>
                <button
                    className="mx-auto block px-6 py-3 bg-blue-500 text-white rounded-lg text-lg cursor-pointer"
                    onClick={() => {
                        setEnableMultiSelection(!enableMultiSelection);
                        setSelected(null);
                        setMultiple([]);
                    }}
                >
                    {enableMultiSelection ? 'Switch to Single Selection' : 'Switch to Multi Selection'}
                </button>
                {data && data.length > 0 ? (
                    data.map((dataItem) => {
                        const isSelected = selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1;
                        return (
                            <div
                                className="item m-10 p-5 rounded-lg text-xl bg-gray-700/50 text-gray-900 shadow-md"
                                key={dataItem.id}
                            >
                                <div
                                    className="question flex flex-row cursor-pointer"
                                    onClick={
                                        enableMultiSelection
                                            ? () => handleMultiSelection(dataItem.id)
                                            : () => handleSingleSelection(dataItem.id)
                                    }
                                >
                                    <h3 className="flex-auto flex items-center">{dataItem.question}</h3>
                                    <span className="flex items-center justify-center">
                                        <box-icon name={isSelected ? 'chevron-down' : 'chevron-right'}></box-icon>
                                    </span>
                                </div>
                                {isSelected ? (
                                    <div className={`answer mt-5 block`}>
                                        <p>{dataItem.answer}</p>
                                    </div>
                                ) : null}
                            </div>
                        );
                    })
                ) : (
                    <div>No data Found!</div>
                )}
            </div>
        </div>
    );
};

export default Accordion;
