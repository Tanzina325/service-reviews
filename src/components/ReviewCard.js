import React from 'react';



const ReviewCard = ({review}) => {
    
    const{name,photo,message}=review
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <div className='flex justify-evenly items-center'>
    <h2 className="card-title">{name}</h2>
    <img style={{width:'20px',height:'20px'}} src={photo} alt="" />
    </div>
    <p>{message}</p>
    
  </div>
</div>
        </div>
    );
};

export default ReviewCard;