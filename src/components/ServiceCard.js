import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const ServiceCard = ({service}) => {
    const{image,title,details,cost,_id}=service
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><PhotoProvider>
      <PhotoView src={image}><img src={image} alt="" /></PhotoView>
    </PhotoProvider></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    {
        details.length > 10 ?
        <p>{details.slice(0,10)+"..."} <Link to='' className='text-amber-600 font-bold '>Read More</Link></p>
        :
        <p>{details}</p>
    }
    <h1 className='text-amber-600 font-extrabold'>Price : {cost}</h1>
    
    <div className="card-actions justify-end">
      <Link to={`/services/${_id}`}><button className="btn btn-primary text-red-600">View details</button></Link>
    </div>
  </div>
</div> 
        </div>
    );
};

export default ServiceCard;
