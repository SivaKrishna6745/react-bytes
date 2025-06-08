import React from 'react';
import CustomTabs from './index';

const TabTest = () => {
    const tabs = [
        {
            label: 'Tab 1',
            content: <div>Hey, I am the content from Tab 1</div>,
        },
        {
            label: 'Tab 2',
            content: <div>Hi, Tab 2 content is me</div>,
        },
        {
            label: 'Tab 3',
            content: <div>Yo, Tab 3 is here ready for rolling</div>,
        },
    ];

    const handleChange = (tabIndex) => {
        console.log(tabIndex);
    };

    return <CustomTabs tabsContent={tabs} onChange={handleChange} />;
};

export default TabTest;
