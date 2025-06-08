import React, { useEffect, useState } from 'react';

const ScrollIndicator = ({ url }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState('');
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const fetchData = async (url) => {
        try {
            setLoading(true);
            const resp = await fetch(url);
            const respJson = await resp.json();
            if (respJson && respJson.products && respJson.products.length > 0) setData(respJson.products);
        } catch (error) {
            console.error(error);
            setErr(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(url);
    }, [url]);

    const handleScrollPercentage = () => {
        const scrolledLength = window.scrollY || document.documentElement.scrollTop;
        const fullHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrollPercentage((scrolledLength / fullHeight) * 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);
        return () => {
            window.removeEventListener('scroll', handleScrollPercentage);
        };
    }, []);

    if (loading) return <div>Loading data! Please wait...</div>;
    if (err) return <div>Error occurred while fetching Data</div>;
    return (
        <div className="wrapper p-5 bg-teal-700 flex flex-col gap-4 justify-center items-center">
            <div className="fixed top-0 z-1 w-full text-center bg-gray-800">
                <h2 className="text-4xl text-white">Scroll Indicator Demo</h2>
                <div className="w-full h-[10px]">
                    <div className="h-[10px] bg-[#b969d1] w-0" style={{ width: `${scrollPercentage}%` }}></div>
                </div>
            </div>
            <div className="mt-10">
                {data && data.length > 0
                    ? data.map((dataItem) => (
                          <p
                              key={dataItem.id}
                              className="m-1 text-white text-lg bg-[#13423e] p-4 text-center rounded-lg"
                          >
                              {dataItem.title}
                          </p>
                      ))
                    : null}
            </div>
        </div>
    );
};

export default ScrollIndicator;
