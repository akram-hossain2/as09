


import React from 'react';
import './DemoReview.css'

const DemoReview = ({data}) => {
    return (
        <div className='card-box'>
        <div className='card-text'>
        
            <h1>{data.name}</h1>
        </div>
           <p>{data.review}</p>
           <h2>Rating : {data.Rating}</h2>
        </div>
    );
};

export default DemoReview;