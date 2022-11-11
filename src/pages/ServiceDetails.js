import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Reviews from '../components/Reviews'


import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useTitle from '../Hooks/UseTitle';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    console.log(serviceDetails)
    const{user} =useContext(AuthContext);
    useTitle('service details')
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
    // const submitReview=(id)=>{
    //   user?.email ? <form onSubmit={reviewAdded}>
    //   <textarea name='message'className="textarea textarea-bordered my-5" placeholder="Your review"></textarea></form>
    //    :<Link><button>Please login</button></Link>}
    
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
        {user?.email ? <form onSubmit={reviewAdded}>
      <textarea name='message'className="textarea textarea-bordered my-5" placeholder="Your review"></textarea>
      <div className="form-control mt-6">
          <button  className="btn btn-primary">add review
        
          </button>
        </div>
      </form>
       :<Link to='/login'><div className='text-center'><button className='btn btn-primary  p-5'>Please login to add a review</button></div></Link>}
        </div>
    );
};

export default ServiceDetails;