import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import useTitle from '../Hooks/UseTitle';

const Services = () => {
    const services =useLoaderData()
    useTitle('services')
    console.log(services)
    return (
        <div className='mx-16 lg:mx-5  grid lg:grid-cols-3 gap-4'>
        {
           services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
        }  
       </div>
    );
};

export default Services;