import React, { useEffect, useState } from 'react';
import './Home.css'
import img1 from '../images/bikeshop.jpg'
import useReviewData from '../useReviewData/useReviewData';
import DemoReview from '../DemoReview/DemoReview';

import CustomLink from '../CustomLink/CustomLink';


const Home = () => {

    const [reviews,setReview ]=useReviewData()
    
    const demoReviews = reviews.slice(0,3);
    


    return (
        <div>
            <div className='intro'>
                <div className='pick-up-line'>
                    <h1>KTM Motorcycle</h1>
                    <h1> Deeply rooted motorsport tradition !!</h1>
                    <p>building race-ready motorcycles for competitive and recreational riding. More than 130 world championship titles .....</p>
                    
                </div>
                <div className='home-image'>
                    <img src={img1}alt="" />
                </div>
            </div>
            <div className='card'>
                {
                    demoReviews.map(demoReview=><DemoReview
                    data ={demoReview}
                    key={demoReview.id} 
                    ></DemoReview>)
                }

            </div>
           <button className='show-button'><CustomLink to="/reviews" className="route-showMore"> Show All Reviews</CustomLink></button>



           




        </div>
    );
};

export default Home;