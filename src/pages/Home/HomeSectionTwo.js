import React from 'react';

const HomeSectionTwo = () => {
    return (
        <div className='grid grid-cols-2 gap-4 my-40 mx-24'>
          <div >
            <h1 className='text-4xl font-extrabold'><span className='text-amber-600'>Nutrition</span> <br /><span>Information</span></h1>
            <p>Are you Keen of your health and want to Know the Food benefits, Hmfoodwala has Come up with the Concept of Providing Nutrional information related to Carbohydrates, Proteins, Calories for each Plate of the meal served by our Home chefs.</p>
            </div>
            <div className='w-9/12'>
                <img src="https://www.hmfoodwala.com/assets/images/nutrition_information.png" alt="" />
                </div>  
        </div>
    );
};

export default HomeSectionTwo;