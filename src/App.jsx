import React from 'react';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMore from './components/load-more';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';

const App = () => {
    return (
        <div>
            <h1 className="uppercase text-5xl text-center bg-purple-400 text-white p-5">React Bytes</h1>
            {/* accordion component */}
            <Accordion />
            {/* random color component */}
            <RandomColor />
            {/* star rating component */}
            <StarRating noOfStars={10} />
            {/* image slider component */}
            <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} />
            {/* load more component */}
            <LoadMore />
            {/* tree view component */}
            <TreeView menus={menus} />
            {/* qr code generator component */}
            <QRCodeGenerator />
            {/* light dark mode component */}
            <LightDarkMode />
        </div>
    );
};

export default App;
