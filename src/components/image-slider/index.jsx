import React, { useEffect, useState } from 'react';

const PAGE = 1;
const ImageSlider = ({ url, limit = 5 }) => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(null);
    const [errMsg, setErrMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const fetchImages = async (getURL) => {
        try {
            setIsLoading(true);
            const res = await fetch(`${getURL}?page=${PAGE}&limit=${limit}`).then((res) => res.json());
            console.log(res);
            setImages(res);
        } catch (error) {
            console.error(error);
            setErrMsg(error);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        if (url === '') return;
        fetchImages(url);
    }, [url]);
    return (
        <div className="wrapper bg-blue-500 p-5">
            <h2 className="text-4xl text-center my-5 text-white">Image Slider Demo</h2>
            <div className="flex justify-center items-center">
                {isLoading ? <div className="text-white text-2xl bg-amber-200">Loading...</div> : ''}
                {errMsg ? (
                    <>
                        <div className="text-2xl font-bold bg-red-300 p-4 rounded-lg w-3/5 flex items-center shadow-md">
                            <box-icon name="error-circle" color="maroon" class="mr-3 self-center" size="md"></box-icon>
                            <p className="text-red-900 text-center flex-grow">Error occurred while fetching images</p>
                        </div>
                    </>
                ) : (
                    ''
                )}
                {images ? (
                    <>
                        <box-icon
                            name="left-arrow-circle"
                            className="absolute w-8 h-8 left-4 cursor-pointer"
                            color="white"
                        ></box-icon>
                        {images.map((image) => (
                            <img
                                key={image.id}
                                src={image.download_url}
                                alt="Placeholder Image"
                                className="rounded-lg h-120"
                            />
                        ))}
                        <box-icon
                            name="right-arrow-circle"
                            className="absolute w-8 h-8 right-4 cursor-pointer"
                            color="white"
                        ></box-icon>
                    </>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default ImageSlider;
