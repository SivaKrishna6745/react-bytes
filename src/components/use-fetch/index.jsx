import { useEffect, useState } from 'react';

const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url, { ...options });
            if (!response.ok) throw new Error(response.statusText);
            const result = await response.json();
            setData(result);
            setErr(null);
        } catch (error) {
            console.error(error);
            setErr(`Some error occurred: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, err, loading };
};

export default useFetch;
