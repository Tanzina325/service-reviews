import React, { useEffect, useState } from 'react';
import ServiceCard from '../../components/ServiceCard';

const HomeServices = () => {
    const [services,setServices] =useState([]);
    useEffect(()=>{
fetch('https://b6a11-service-review-server-side-tau.vercel.app/threeservices')
.then(res=>res.json())
.then(data=>setServices(data))
    },[])
    return (
        <div className=' mx-auto grid lg:grid-cols-3 my-24 gap-4'>
         {
            services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
         } 
         
        </div>
    );
};

export default HomeServices;