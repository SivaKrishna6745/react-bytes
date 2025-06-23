import useWindowResize from '.';

const UseWindowResizeTest = () => {
    const { windowSize } = useWindowResize();
    const { width, height } = windowSize;
    return (
        <div className="wrapper p-5 bg-red-400 flex flex-col items-center justify-center">
            <h2 className="text-4xl text-white mb-8">useWindowResize Custom Hook Demo</h2>
            <div className="bg-white/60 px-8 py-4 rounded-xl text-2xl flex flex-col gap-4">
                <p>Width is {width}</p>
                <p>Height is {height}</p>
            </div>
        </div>
    );
};

export default UseWindowResizeTest;
