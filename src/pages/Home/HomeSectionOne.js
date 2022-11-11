import React from 'react';

const HomeSectionOne = () => {
    return (
        <div>
            <div>
                <h1 className='text-5xl font-extrabold text-center mt-20'>How are we different from
                    <br />Restaurant foods?
                </h1>
                <div className='mx-auto my-5 lg:w-1/3'><p >Get your favourite food delivered with Utmost Hygiene.
Our Food is free from Chemicals and no added preservatives.
100% Homemade Quality and Authentic Foods.
Home pickup and home delivery through our delivery partners.</p></div>
            </div>
            <div className='lg:flex justify-around mx-5 lg:mx-24'>
                <img className=' w-fit lg:w-6/12'src="https://www.hmfoodwala.com/assets/images/homemade.png" alt="" />
                <img className='rotate-90 my-[-200px] lg:my-0 lg:rotate-0' src="https://www.hmfoodwala.com/assets/images/vs_v.png" alt="" />
                <img src="https://www.hmfoodwala.com/assets/images/restaurant.png" alt="" />
            </div>
        </div>
    );
};

export default HomeSectionOne;