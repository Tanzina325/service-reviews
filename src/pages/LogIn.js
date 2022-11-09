import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { FaGoogle,FaGithub } from 'react-icons/fa'
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const LogIn = () => {
    const {signIn,providerLogin} =useContext(AuthContext);
    const navigate=useNavigate();
    const[error,setError]=useState('');
    const location =useLocation();
    const googleProvider = new GoogleAuthProvider()
    const githubProvider =new GithubAuthProvider()
    const from =location.state?.from?.pathname || '/';

    const handleSubmit =event =>{
        event.preventDefault();
        const form = event.target;
        const email =form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            form.reset();
            setError(error.message)
            navigate(from,{replace:true})
        })
        .catch(error=>{
            console.error(error);
            setError(error.message)
        })
    }
    const handleGoogleSignIn=()=>{
        providerLogin(googleProvider)
        .then(result=>{
          const user=result.user;
          console.log(user);
          navigate(from,{replace:true})})
          .catch(error=>{
              console.error(error);
      })}
      const handleGithubSignIn=()=>{
          providerLogin(githubProvider)
          .then(result=>{
            const user=result.user;
            console.log(user);
            navigate(from,{replace:true})})
            .catch(error=>{
                console.error(error);
        })}
    return (
        <div>
           <div className="hero  bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text"name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password'placeholder="password" className="input input-bordered" />
          
        </div>
        <p>{error}</p>
        <Link to ='/register'><p>New to this website ?</p></Link>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p>Try another method to login...</p>
          
          <div className='flex mx-auto'>
            <div className='p-2 text-red-600'><FaGoogle onClick={handleGoogleSignIn}></FaGoogle></div>
            <div className='p-2 text-red-600'><FaGithub  onClick={handleGithubSignIn}></FaGithub></div>
          </div>
      </div>
      
    </div>
  </div>
  
</div>
        </div>
    );
};

export default LogIn;