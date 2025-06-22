import { useState } from 'react';

const UseOutsideClickTest = () => {
    const [showContent, setShowContent] = useState(false);
    return (
        <div className="wrapper p-5 bg-green-400 min-h-screen flex flex-col items-center">
            <h2 className="text-4xl text-white mb-4">useOutsideClick Custom Hook Demo</h2>
            {showContent ? (
                <div className="bg-white/50 p-8 rounded-xl text-center text-xl flex flex-col gap-4">
                    <h2 className="uppercase">Content Modal</h2>
                    <p>Click ouside the modal to close it</p>
                </div>
            ) : (
                <button
                    className="bg-blue-500 rounded-lg cursor-pointer text-white text-lg px-4 py-2"
                    onClick={() => setShowContent(true)}
                >
                    Show Content
                </button>
            )}
        </div>
    );
};

export default UseOutsideClickTest;
