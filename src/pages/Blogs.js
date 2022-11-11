import React from 'react';
import useTitle from '../Hooks/UseTitle';

const Blogs = () => {
  useTitle('blogs')
    return (
        <div className='lg:grid grid-cols-2 gap-6 my-24 mx-10'>
            <div tabIndex={0} className="mb-5 lg:my-0 collapse collapse-open border-2  border-amber-600 bg-base-100 rounded-box"> 
  <div className="collapse-title text-xl font-medium">
  Difference between SQL and NoSQL :
  </div>
  <div className="collapse-content"> 
    <ol>
        <li>SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.</li>
        <li>SQL databases defines and manipulates data based structured query language (SQL) whereas NoSQL database has dynamic schema for unstructured data.</li> 
    </ol>
  </div>
</div>
<div tabIndex={0} className=" border-2  border-amber-600 collapse mb-5 lg:my-0 collapse-open bg-base-100 rounded-box"> 
  <div className="collapse-title text-xl font-medium">
  What is JWT, and how does it work?
  </div>
  <div className="collapse-content"> 
    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. <br /> When it comes to API authentication and server-to-server authorization, JSON web token (JWT) is particularly a useful technology. In terms of Single Sign-On (SSO), it means that a service provider can receive trustworthy information from the authentication server.By sharing a secret key with the Identity Provider, the Service Provider can hash a part of a token it receives and compare it to the signature of the token. Now, if that result matches the signature, the SP knows that the information provided has come from the other entity possessing the key.  </p>
  </div>
</div>
<div tabIndex={0} className=" mb-5 lg:my-0 collapse collapse-open border-2 border-amber-600 bg-base-100 rounded-box"> 
  <div className="collapse-title text-xl font-medium">
  What is the difference between javascript and NodeJS?
  </div>
  <div className="collapse-content"> 
    <p>Javascript is a programming language that is used for writing scripts on the website.NodeJS is a Javascript runtime environment. </p>
    <p>Javascript can only be run in the browsers.Nodejs does not have capability to add HTML tags.</p>
    <p>It is basically used on the client-side.It is mostly used on the server-side.</p>
  </div>
</div>
<div tabIndex={0} className="  border-2 border-amber-600 mb-5 lg:my-0 collapse collapse-open  bg-base-100 rounded-box"> 
  <div className="collapse-title text-xl font-medium">
  How does NodeJS handle multiple requests at the same time?
  </div>
  <div className="collapse-content"> 
    <p>The event-driven model is very efficient and allows NodeJS to handle thousands of concurrent requests with ease.Node.js uses two concepts by Non-blocking I/O and asyncronus .</p>
  </div>
</div>
        </div>
    );
};

export default Blogs;