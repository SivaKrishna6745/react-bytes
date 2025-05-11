import React, { useEffect, useState } from 'react';

const PAGE = 1;
const ImageSlider = ({ url, limit = 5 }) => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
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

    const handlePrevious = () => {
        currentSlide === 0 ? setCurrentSlide(images.length - 1) : setCurrentSlide((prevSlideNum) => prevSlideNum - 1);
    };
    const handleNext = () => {
        currentSlide === images.length - 1 ? setCurrentSlide(0) : setCurrentSlide((prevSlideNum) => prevSlideNum + 1);
    };

    return (
        <div className="wrapper bg-blue-500 p-5 min-h-[50vh]">
            <h2 className="text-4xl text-center my-5 text-white">Image Slider Demo</h2>
            <div className="flex justify-center items-center relative">
                {isLoading ? <div className="text-white text-2xl">Loading...</div> : ''}
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
                {images && images.length ? (
                    <>
                        <box-icon
                            name="left-arrow-circle"
                            className="absolute w-8 h-8 left-4 cursor-pointer hover:bg-white/20 rounded-full"
                            color="white"
                            onClick={handlePrevious}
                        ></box-icon>
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image.download_url}
                                alt="Placeholder Image"
                                className={`rounded-lg h-80 ${currentSlide === index ? 'block' : 'hidden'}`}
                            />
                        ))}
                        <box-icon
                            name="right-arrow-circle"
                            className="absolute w-8 h-8 right-4 cursor-pointer hover:bg-white/20 rounded-full"
                            color="white"
                            onClick={handleNext}
                        ></box-icon>
                        <span className="flex absolute bottom-2">
                            {images && images.length
                                ? images.map((_, index) => (
                                      <button
                                          type="button"
                                          key={index}
                                          className={`h-3 w-3 rounded-full mx-1 border-none outline-none cursor-pointer ${
                                              currentSlide === index ? 'bg-white' : 'bg-gray-700'
                                          }`}
                                          onClick={() => setCurrentSlide(index)}
                                      ></button>
                                  ))
                                : ''}
                        </span>
                    </>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default ImageSlider;
