import React, { useState } from 'react';

const AddAService = () => {
    const[service,setService]=useState({});
    const handleAddService =event =>{
        event.preventDefault();
        console.log(service);

        fetch('https://b6a11-service-review-server-side-tau.vercel.app/services',{
        method: 'POST',
        headers:{
            'content-type' :'application/json'
        },
        body: JSON.stringify(service)
        })
      .then(res=>res.json())
      .then(data=>console.log(data))
        }

const handleInputBlur = event =>{
    const field= event.target.name;
    const value =event.target.value;
    const newService={...service}
    newService[field] =value;
    setService(newService)
}

    return (
        <div>
         <div className="hero  bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Add a Service!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleAddService}>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Title of service</span>
          </label>
          <input onBlur={handleInputBlur} type="text"name='title' placeholder="title of service" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input onBlur={handleInputBlur} type="text" name='image'placeholder="photo URL" className="input input-bordered" />
          
        </div> 
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details of service</span>
          </label>
          <input onBlur={handleInputBlur} type="text" name='details'placeholder="Details of service" className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Ingredients</span>
          </label>
          <input onBlur={handleInputBlur} type="text" name='ingredients'placeholder="ingredients" className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price of service</span>
          </label>
          <input  onBlur={handleInputBlur} type="text" name='cost'placeholder="price of menu" className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <button type='submit'className="btn btn-primary">Add service</button>
        </div>   
        </form> 
        </div>
        </div>
      
    </div>
  </div>
  
</div>
    );
};

export default AddAService;