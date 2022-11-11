import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewCard = ({review,handleDelete}) => {
    const{_id,name,photo,message}=review;
return (
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <div className='flex justify-evenly items-center'>
    <h2 className="card-title">{name}</h2>
    <img style={{width:'20px',height:'20px'}} src={photo} alt="" />
    </div>
    <p>{message}</p>
    <div className='flex justify-between'>
        <Link to={`update/${_id}`}><button  className="btn btn-primary">update</button></Link>
        <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default MyReviewCard;