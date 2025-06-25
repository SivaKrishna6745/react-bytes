import { useEffect, useRef, useState } from 'react';

const ScrollToSection = () => {
    const data = [
        {
            label: 'First Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'red',
            },
        },
        {
            label: 'Second Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'green',
            },
        },
        {
            label: 'Third Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'blue',
            },
        },
        {
            label: 'Fourth Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'orange',
            },
        },
        {
            label: 'Fifth Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'purple',
            },
        },
    ];
    const [randomIndex, setRandomIndex] = useState(null);
    const ref = useRef(null);
    const handleScroll = () => {
        const randomValue = Math.floor(Math.random() * data.length);
        setRandomIndex(randomValue);
    };
    useEffect(() => {
        if (ref.current) {
            const pos = ref.current.getBoundingClientRect().top;
            window.scrollTo({
                top: pos,
                behavior: 'smooth',
            });
        }
    }, [randomIndex]);

    return (
        <div className="wrapper p-5 bg-slate-700 flex flex-col items-center">
            <h2 className="text-4xl text-white">Scroll to particular section Demo</h2>
            <button
                className="cursor-pointer rounded-lg bg-blue-400 text-white px-4 py-2 m-4"
                onClick={() => handleScroll()}
            >
                Scroll
            </button>
            {data?.map((item, index) => (
                <div
                    ref={index === randomIndex ? ref : null}
                    key={item.label}
                    style={item.style}
                    className="flex items-center justify-center text-3xl text-white"
                >
                    {item.label}
                </div>
            ))}
        </div>
    );
};

export default ScrollToSection;
