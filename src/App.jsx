import React, { useState } from 'react';
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
import SearchAutoComplete from './components/search-autocomplete';
import TicTacToe from './components/tic-tac-toe';
import FeatureFlag from './components/feature-flag';
import FeatureFlagsGlobalState from './components/feature-flag/context';
import UseFetchHookTest from './components/use-fetch/test';
import UseOutsideClickTest from './components/use-outside-click/test';
import UseWindowResizeTest from './components/use-window-resize/test';
import ScrollToTopAndBottom from './components/scroll-to-top-and-bottom';
import ScrollToSection from './components/scroll-to-section';

const App = () => {
    const bytes = [
        {
            id: 1,
            label: 'accordion',
            component: () => <Accordion />,
        },
        {
            id: 2,
            label: 'random color',
            component: () => <RandomColor />,
        },
        {
            id: 3,
            label: 'star rating',
            component: () => <StarRating noOfStars={10} />,
        },
        {
            id: 4,
            label: 'image slider',
            component: () => <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} />,
        },
        {
            id: 5,
            label: 'load more',
            component: () => <LoadMore />,
        },
        {
            id: 6,
            label: 'tree view',
            component: () => <TreeView />,
        },
        {
            id: 7,
            label: 'qr code generator',
            component: () => <QRCodeGenerator />,
        },
        {
            id: 8,
            label: 'light dark mode',
            component: () => <LightDarkMode />,
        },
        {
            id: 9,
            label: 'scroll indicator',
            component: () => <ScrollIndicator url="https://dummyjson.com/products?limit=100" />,
        },
        {
            id: 10,
            label: 'custom tabs',
            component: () => <TabTest />,
        },
        {
            id: 11,
            label: 'modal popup',
            component: () => <ModalPopup />,
        },
        {
            id: 12,
            label: 'github profile finder',
            component: () => <GithubProfileFinder />,
        },
        {
            id: 13,
            label: 'search autocomplete',
            component: () => <SearchAutoComplete />,
        },
        {
            id: 14,
            label: 'tic tac toe',
            component: () => <TicTacToe />,
        },
        {
            id: 15,
            label: 'feature flag',
            component: () => (
                <FeatureFlagsGlobalState>
                    <FeatureFlag />
                </FeatureFlagsGlobalState>
            ),
        },
        {
            id: 16,
            label: 'use fetch',
            component: () => <UseFetchHookTest />,
        },
        {
            id: 17,
            label: 'use outside click',
            component: () => <UseOutsideClickTest />,
        },
        {
            id: 18,
            label: 'use window resize',
            component: () => <UseWindowResizeTest />,
        },
        {
            id: 19,
            label: 'scroll to top and bottom',
            component: () => <ScrollToTopAndBottom />,
        },
        {
            id: 20,
            label: 'scroll to section',
            component: () => <ScrollToSection />,
        },
    ];
    const [activeByte, setActiveByte] = useState(null);
    const ActiveComponent = activeByte !== null ? bytes[activeByte].component : null;
    const handleBack = () => {
        setActiveByte(null);
    };
    return (
        <div>
            <h1 className="uppercase text-5xl text-center bg-purple-400 text-white p-5">React Bytes</h1>
            {!ActiveComponent &&
                bytes.map((byte, index) => (
                    <button
                        key={byte.id}
                        className="bg-black/50 rounded-lg p-4 m-4 cursor-pointer"
                        onClick={() => setActiveByte(index)}
                    >
                        {byte.label}
                    </button>
                ))}
            {ActiveComponent && (
                <div className="relative">
                    <div
                        className="absolute top-10 left-10 bg-slate-600 rounded-full p-1 cursor-pointer hover:bg-slate-700 transition flex items-center justify-center"
                        onClick={handleBack}
                    >
                        <box-icon name="chevron-left" color="white" size="md"></box-icon>
                    </div>
                    <ActiveComponent />
                </div>
            )}
        </div>
    );
};

export default App;
