import React from 'react';
import MenuItem from './menu-item';

const MenuList = ({ list = [] }) => {
    return (
        <ul className="container list-none style-[list-style:unset] pl-5">
            {list && list.length ? list.map((item) => <MenuItem key={item.label} item={item} />) : ''}
        </ul>
    );
};

export default MenuList;
