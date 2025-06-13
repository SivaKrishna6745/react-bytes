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
import ScrollIndicator from './components/scroll-indicator';
import TabTest from './components/custom-tabs/tab-test';
import ModalPopup from './components/modal-popup';
import GithubProfileFinder from './components/github-profile-finder';

const App = () => {
    return (
        <div>
            {/* <h1 className="uppercase text-5xl text-center bg-purple-400 text-white p-5">React Bytes</h1> */}
            {/* accordion component */}
            {/* <Accordion /> */}
            {/* random color component */}
            {/* <RandomColor /> */}
            {/* star rating component */}
            {/* <StarRating noOfStars={10} /> */}
            {/* image slider component */}
            {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} /> */}
            {/* load more component */}
            {/* <LoadMore /> */}
            {/* tree view component */}
            {/* <TreeView menus={menus} /> */}
            {/* qr code generator component */}
            {/* <QRCodeGenerator /> */}
            {/* light dark mode component */}
            {/* <LightDarkMode /> */}
            {/* scroll indicator component */}
            {/* <ScrollIndicator url="https://dummyjson.com/products?limit=100" /> */}
            {/* custom tabs component */}
            {/* <TabTest /> */}
            {/* modal popup component */}
            {/* <ModalPopup /> */}
            {/* github profile finder component */}
            <GithubProfileFinder />
        </div>
    );
};

export default App;
