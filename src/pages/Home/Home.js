import React from 'react';
import { Link } from 'react-router-dom';
import HomeSectionOne from './HomeSectionOne';
import HomeSectionTwo from './HomeSectionTwo';
import HomeServices from './HomeServices';

const Home = () => {
    return (
        <div className='mx-5' >
         <div className='text-center'><button className="rounded-full px-12 my-3 text-amber-600 font-bold text-xl py-3 bg-slate-600">Provided service in All Metro cities</button></div>
         <div className='grid lg:grid-cols-2 gap-2 justify-evenly items-center'>
            
            <div className='mx-auto'>
                <h1 className=' font-extrabold text-2xl text-amber-600'>Authentic and Homemade  <br /> <span className='font-extrabold  text-red-600 text-2xl'>Food delivered to your Home</span></h1>
                
                
                <p>Missing Home made food of your Authentic state food ? Your <br /> wait is over…! I bring Home made food at your door steps.</p>
            </div>
            <div className=''>
            <img src="https://www.hmfoodwala.com/assets/images/home_banner.png" alt="" />
            </div>
           
       </div>
       <HomeServices></HomeServices>
       <div className='text-center my-10'><Link to='/services'><button className="btn btn-warning">See All Services</button></Link></div>
       <HomeSectionOne></HomeSectionOne>
       <HomeSectionTwo></HomeSectionTwo>  
        </div>
    );
};

export default Home;