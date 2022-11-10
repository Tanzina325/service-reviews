import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from '../components/Reviews'


import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    console.log(serviceDetails)
    const{user} =useContext(AuthContext);
    // const navigate=useNavigate();
    // const location =useLocation();
    
    
    // const from =location.state?.from?.pathname || '/';

    
    
    const {image,title,details,ingredients,cost,_id} = serviceDetails;
    const reviewAdded = event=>{
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        form.reset()
        const addReview ={
        reviewId : _id,
        name:`${user?.displayName}`,
        email:`${user?.email}`,
        photo:`${user?.photoURL}`,
        message
        }
        console.log(addReview)

        fetch('https://b6a11-service-review-server-side-tau.vercel.app/reviews',{
        method: 'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(addReview)
        })
      .then(res=>res.json())
      .then(data=>console.log(data))
    }
    
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
        <Reviews id={_id}></Reviews>
        <form onSubmit={reviewAdded}>
        <textarea name='message'className="textarea textarea-bordered my-5" placeholder="Your review"></textarea>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">add review
        
          </button>
        </div>
        
    
        </form>
        
        
        
        </div>
    );
};

export default ServiceDetails;