import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const QRCodeGenerator = () => {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');
    const generateQRCode = () => {
        setQrCode(input);
        setInput('');
    };
    return (
        <div className="wrapper p-5 bg-cyan-600 flex flex-col justify-center items-center gap-8">
            <h2 className="text-4xl text-white">QR Code Generator Demo</h2>
            <div className="flex gap-4">
                <input
                    type="text"
                    name="qr-code"
                    placeholder="Enter your value here..."
                    className="text-xl border-b-2 py-2 outline-none border-b-orange-500 w-80"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    disabled={input && input.trim() !== '' ? false : true}
                    onClick={generateQRCode}
                    className={`bg-green-500 py-2 px-6 rounded-lg text-lg ${
                        input && input.trim() !== '' ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
                    }`}
                >
                    Generate
                </button>
            </div>
            <div>{qrCode ? <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" /> : ''}</div>
        </div>
    );
};

export default QRCodeGenerator;
