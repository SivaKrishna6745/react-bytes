import React, { useEffect, useState } from 'react';

const ScrollIndicator = ({ url }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState('');
    const fetchData = async (url) => {
        try {
            setLoading(true);
            const resp = await fetch(url).then((res) => res.json());
            console.log(resp);
            if (resp && resp.products && resp.products.length > 0) setData(resp.products);
        } catch (error) {
            console.error(error);
            setErr(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData(url);
    }, [url]);
    return (
        <div className="wrapper p-5 bg-amber-600 flex flex-col gap-4 justify-center items-center">
            <h2 className="text-4xl text-white">Scroll Indicator Demo</h2>
            <div>{data && data.length > 0 ? data.map((dataItem) => <p>{dataItem.title}</p>) : null}</div>
        </div>
    );
};

export default ScrollIndicator;
