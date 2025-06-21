import LightDarkMode from '../light-dark-mode';
import TicTacToe from '../tic-tac-toe';
import RandomColor from '../random-color';
import Accordion from '../accordion';
import TreeView from '../tree-view';
import menus from '../tree-view/data';
import { useContext } from 'react';
import { FeatureFlagsContext } from './context';

const FeatureFlag = () => {
    const { loading, enabledFlags } = useContext(FeatureFlagsContext);
    const componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode />,
        },
        {
            key: 'showTicTacToeBoard',
            component: <TicTacToe />,
        },
        {
            key: 'showRandomColorGenerator',
            component: <RandomColor />,
        },
        {
            key: 'showAccordion',
            component: <Accordion />,
        },
        {
            key: 'showTreeView',
            component: <TreeView menus={menus} />,
        },
    ];

    const checkEnabledFlags = (getCurrKey) => {
        return enabledFlags[getCurrKey];
    };

    if (loading) return <div className="text-xl text-white">Loading, please wait!!</div>;
    return (
        <div className="wrapper p-5 bg-amber-800 flex flex-col items-center">
            <h2 className="text-4xl text-white">Feature Flags Demo</h2>
            {componentsToRender.map((comp) => (checkEnabledFlags(comp.key) ? comp.component : null))}
        </div>
    );
};

export default FeatureFlag;
