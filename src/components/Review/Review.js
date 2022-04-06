
import React from 'react';

const Review = ({review}) => {

    return (
        <div className='card-box'>
        <div className='card-text'>
        
            <h1>{review.name}</h1>
        </div>
           <p>{review.review}</p>
           <h2>Rating : {review.Rating}</h2>
        </div>


    );
};

export default Review;