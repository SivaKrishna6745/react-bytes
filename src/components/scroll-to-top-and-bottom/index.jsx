import useFetch from '../use-fetch';

const ScrollToTopAndBottom = () => {
    const { data, err, loading } = useFetch('https://dummyjson.com/products', {});

    if (loading) return <div className="text-2xl text-white">Loading!! please wait...</div>;
    if (err) return <div className="text-2xl text-white">Data Fetch failed!! Try again later...</div>;

    return (
        <div className="wrapper p-5 bg-purple-500 flex flex-col items-center">
            <h2 className="text-4xl text-white mb-4">Scroll to Top and Bottom Demo</h2>
            <button className="cursor-pointer bg-green-700 text-white px-4 py-2 rounded-lg">Scroll to Bottom</button>
            <ul>
                {data?.products?.map((item) => (
                    <li className="text-xl py-3 px-6 text-center bg-white/80 rounded-lg m-2" key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
            <button className="cursor-pointer bg-green-700 text-white px-4 py-2 rounded-lg">Scroll to Top</button>
        </div>
    );
};

export default ScrollToTopAndBottom;
