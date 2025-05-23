import React, { useState } from 'react';
import MenuList from './menu-list';

const MenuItem = ({ item }) => {
    const [displayCurrChildren, setDisplayCurrChildren] = useState([]);
    const handleToggleChildren = (label) => {
        setDisplayCurrChildren({
            ...displayCurrChildren,
            [label]: !displayCurrChildren[label],
        });
    };

    return (
        <li>
            <div className="flex gap-1 items-center h-10">
                <p>{item.label}</p>
                {item && item.children && item.children.length > 0 ? (
                    <span
                        onClick={() => handleToggleChildren(item.label)}
                        className="cursor-pointer h-full flex items-center"
                    >
                        {displayCurrChildren[item.label] ? (
                            <box-icon name="minus"></box-icon>
                        ) : (
                            <box-icon name="plus"></box-icon>
                        )}
                    </span>
                ) : (
                    ''
                )}
            </div>
            {item && item.children && item.children.length > 0 && displayCurrChildren[item.label] ? (
                <MenuList list={item.children} />
            ) : (
                ''
            )}
        </li>
    );
};

export default MenuItem;
