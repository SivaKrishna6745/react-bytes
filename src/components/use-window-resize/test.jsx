import useWindowResize from '.';

const UseWindowResizeTest = () => {
    useWindowResize();
    return (
        <div className="wrapper p-5 bg-red-400 flex flex-col items-center justify-center">
            <h2 className="text-4xl text-white">useWindowResize Custom Hook Demo</h2>
        </div>
    );
};

export default UseWindowResizeTest;
