import React from 'react';
import Review from '../Review/Review';
import useReviewData from '../useReviewData/useReviewData';
import './Reviews.css'

const Reviews = () => {
    const [reviews,setReview]=useReviewData()
    return (
        <div className='review-column'>
            {
                reviews.map(review=><Review 
                    review={review}
                    key={review.id}
                    ></Review>)
            }
            
        </div>

    );
};

export default Reviews;