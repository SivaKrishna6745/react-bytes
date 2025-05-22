import React from 'react';
import MenuList from './menu-list';

const TreeView = ({ menus = [] }) => {
    return (
        <div className="wrapper p-5 bg-blue-400 flex flex-col justify-center items-center min-h-[50vh]">
            <h2 className="text-4xl my-5 text-white">Tree View Demo</h2>
            <MenuList list={menus} />
        </div>
    );
};

export default TreeView;
