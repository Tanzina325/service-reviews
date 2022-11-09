import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const {image,title,details,ingredients,cost} = serviceDetails
    return (
        <div className='mx-3'>
            <div className="card lg:card-side w-100 bg-base-100 shadow-xl">
  <figure><img src={image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{details}</p>
    <h1 className='text-amber-600 font-extrabold'>Price : {cost}</h1>
    <h1 ><span className='text-amber-600'>Ingredients </span>: {ingredients}</h1>
        </div>
        </div>
        </div>
    );
};

export default ServiceDetails;