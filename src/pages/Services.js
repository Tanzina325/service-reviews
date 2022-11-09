import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
    const services =useLoaderData()
    return (
        <div className='mx-16 lg:mx-5  grid lg:grid-cols-3 gap-4'>
        {
           services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
        }  
       </div>
    );
};

export default Services;