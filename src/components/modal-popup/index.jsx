import React, { useState } from 'react';

const Modal = ({ showModalPopup, onClose }) => {
    return (
        <div
            className={`bg-yellow-50 rounded-2xl text-center p-8 max-w-sm relative transform transition-all duration-500 ease-in-out flex flex-col gap-4 ${
                showModalPopup ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-80 -translate-y-[80px]'
            }`}
        >
            <box-icon name="x" className="absolute right-2 top-2 cursor-pointer" onClick={onClose}></box-icon>
            <div className="text-3xl font-bold">Header</div>
            <div className="text-xl font-bold">This is the modal body</div>
            <div className="text-2xl font-bold">Footer</div>
        </div>
    );
};

const ModalPopup = () => {
    const [showModalPopup, setShowModalPopup] = useState(false);
    const openModalPopup = () => {
        setShowModalPopup(true);
    };

    return (
        <div className="wrapper p-5 bg-green-800 flex flex-col justify-center items-center">
            <h2 className="text-4xl text-white">Modal Popup Demo</h2>
            <div>
                <button
                    className="cursor-pointer bg-violet-600 px-6 py-3 text-lg text-white rounded-xl my-4"
                    onClick={openModalPopup}
                >
                    Open Modal Popup
                </button>
                <div
                    className={`fixed inset-0 bg-[rgba(0,0,0,0.8)] flex items-center justify-center ${
                        showModalPopup ? 'visible' : 'invisible'
                    }`}
                >
                    <Modal showModalPopup={showModalPopup} onClose={() => setShowModalPopup(false)} />
                </div>
            </div>
        </div>
    );
};

export default ModalPopup;
