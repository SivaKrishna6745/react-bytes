import React, { useState } from 'react';
import data from './data';

const Accordion = () => {
    const [selected, setSelected] = useState(null);
    const handleSelection = (currId) => {
        console.log(currId);
    };

    return (
        <div className="wrapper bg-amber-200">
            <div className="accordion">
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item" key={dataItem.id}>
                            <div className="title" onClick={() => handleSelection(dataItem.id)}>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No data Found!</div>
                )}
            </div>
        </div>
    );
};

export default Accordion;
