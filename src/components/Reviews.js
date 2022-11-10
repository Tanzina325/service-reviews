import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard'

const Reviews = ({id}) => {
    const [reviews,setReviews] =useState([]);
        useEffect(()=>{
            fetch(`https://b6a11-service-review-server-side-tau.vercel.app/reviews?reviewId=${id}`)
            .then(res=>res.json())
            .then(data=>setReviews(data))
            },[id])
    return (
        
        <div>
         <div className='m-5 lg:m-20 grid lg:grid-cols-2 gap-4'>
         {
            reviews.map(review=><ReviewCard key={review._id} review={review}></ReviewCard>)
         } 
         
        </div>   
        </div>
    );
};

export default Reviews;