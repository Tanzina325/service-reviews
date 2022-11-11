import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTitle from '../Hooks/UseTitle';


const Update = () => {
    const router =useParams();
    console.log(router)
    const {id} =router
    const [review,setReview]=useState({});
    useTitle('Update')
    useEffect(()=>{
      fetch(`https://b6a11-service-review-server-side-tau.vercel.app/reviews/${id}`)
      .then(res=>res.json())
      .then(data=>setReview(data))
      
    },[id])
  console.log(review)
    const updateReview = event=>{
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        // setText(message)
        console.log(message)
        // form.reset();
        fetch(`https://b6a11-service-review-server-side-tau.vercel.app/reviews/${id}`,{
        method: 'PATCH',
        headers:{
            'content-type' :'application/json'
        },
        body: JSON.stringify({message})
        })
      .then(res=>res.json())
      .then(data=>console.log(data))
    }
    return (
        <div>
          <form onSubmit={updateReview}>
        <textarea name='message' defaultValue={review?.message} className="textarea textarea-bordered my-5" placeholder="Your review"></textarea>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">update review
        
          </button>
        </div>
        
    
        </form>  
        </div>
    );
};

export default Update;