import useFetch from '.';

const UseFetchHookTest = () => {
    const { data, err, loading } = useFetch('https://dummyjson.com/products', {});
    console.log('data', data?.products);
    return (
        <div className="wrapper p-5 bg-purple-500 flex flex-col items-center">
            <h2 className="text-4xl text-white">useFetch Custom Hook Demo</h2>
            <div className="my-2 h-0.5 w-full bg-black"></div>
            {loading && <div className="text-2xl text-white">Fetch pending!! Please wait...</div>}
            {err && <div className="text-2xl text-white">Fetch Failed!! Please try again later...</div>}
            {data?.products?.map((item) => {
                return (
                    <div key={item.id} className="text-lg m-2 bg-amber-400 px-4 py-2 rounded-lg">
                        {item.title}
                    </div>
                );
            })}
        </div>
    );
};

export default UseFetchHookTest;
