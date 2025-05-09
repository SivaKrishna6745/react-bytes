import React from 'react';

const StarRating = ({ noOfStars = 5 }) => {
    const stars = 0;
    return (
        <div className="container">{...Array.from({ length: noOfStars }, () => <box-icon name="star"></box-icon>)}</div>
    );
};

export default StarRating;
