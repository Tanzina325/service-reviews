
import React, { useContext, useEffect, useState } from 'react';
import MyReviewCard from '../components/MyReviewCard';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const MyReviews = () => {
    const [reviews,setReviews] =useState([]);
    const{user} =useContext(AuthContext);
    

    
        useEffect(()=>{
            fetch(`https://b6a11-service-review-server-side-tau.vercel.app/reviews?email=${user?.email}`)
            .then(res=>res.json())
            .then(data=>setReviews(data))
            },[user?.email])
            console.log(reviews)
            const handleDelete = id =>{
                console.log('deleting',id)
                         const proceed =window.confirm('want to delete') ;
                         if(proceed) {
                            fetch(`https://b6a11-service-review-server-side-tau.vercel.app/reviews/${id}`,{
                                method: 'DELETE'})
                            .then(res=>res.json())
                            .then(data=>{
                                console.log(data);
                                if(data.deletedCount > 0){
                                    alert('deleted successfully');
                const remaining= reviews.filter(rev=>rev._id !== id);
                setReviews(remaining)
            }
        })}
                
                }
                         
            

    return (
        <div>
         <div className='m-5 lg:m-20 grid lg:grid-cols-2 gap-4'>
         {
            reviews.map(review=><MyReviewCard key={review._id} handleDelete={handleDelete} review={review}></MyReviewCard>)
         } 
         
        </div>      
        </div>
    );
};

export default MyReviews;
