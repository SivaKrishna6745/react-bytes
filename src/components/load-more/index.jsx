import React, { useEffect, useState } from 'react';

const LoadMore = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    async function fetchProducts() {
        try {
            setLoading(true);
            const data = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const res = await data.json();
            if (res && res.products && res.products.length) {
                setProducts((prevProducts) => [...prevProducts, ...res.products]);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count]);

    useEffect(() => {
        if (products && products.length === 100) setDisableButton(true);
    }, [products]);

    return (
        <div className="wrapper bg-[#ECAD61] p-5 min-h-screen flex flex-col justify-center items-center">
            <h2 className="text-4xl my-5 text-white">Load More Demo</h2>
            {loading && <div className="text-2xl">Loading data! please wait...</div>}
            <div className="grid grid-cols-6">
                {products && products.length
                    ? products.map((product) => {
                          return (
                              <div
                                  key={product.id}
                                  className="bg-[#D8D3D0] rounded-xl m-2 flex justify-center items-center flex-col p-3 h-[200px]"
                              >
                                  <img src={product.thumbnail} alt={product.title} className="h-[150px]" />
                                  <p className="text-lg text-[#37474F] pb-4">{product.title}</p>
                              </div>
                          );
                      })
                    : ''}
            </div>
            <button
                className={`btn text-xl text-white rounded-xl bg-purple-400 px-12 py-4 m-8 ${
                    disableButton ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                }`}
                onClick={() => setCount((prevCount) => prevCount + 1)}
                disabled={disableButton}
                aria-disabled={disableButton}
            >
                Load More
            </button>
            {disableButton ? <p className="text-2xl text-shadow-lg text-white">All Products Loaded</p> : ''}
        </div>
    );
};

export default LoadMore;
