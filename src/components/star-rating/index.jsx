import React, { useState } from 'react';

const StarRating = ({ noOfStars = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hoverIndex, setHoverIndex] = useState(null);
    return (
        <div className="wrapper p-5 bg-amber-400">
            <h2 className="text-4xl text-center my-5 text-white">Star Rating Demo</h2>
            <div className="container flex justify-center gap-1 max-w-full">
                {...Array.from({ length: noOfStars }, (_, index) => (
                    <box-icon
                        key={index}
                        onMouseOver={() => setHoverIndex(index + 1)}
                        onMouseLeave={() => setHoverIndex(null)}
                        onClick={() => setRating(index + 1)}
                        name="star"
                        type={hoverIndex > index || rating > index ? 'solid' : 'regular'}
                        className="cursor-pointer"
                    ></box-icon>
                ))}
            </div>
        </div>
    );
};

export default StarRating;
