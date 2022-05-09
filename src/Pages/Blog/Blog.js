import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div >
         <div className='responsive-container'>
         <div className="blog-text">
         <h3>Quesiton : Difference between javascript and nodejs</h3>
         <span>Node Js</span>
        <p>It's a programming language, after all. We primarily utilize JS to create scripts on a website that make web pages more dynamic. Only browsers are capable of running JS. It is used on the client-side of the website. JS can simply add HTML and even interact with the document object model (DOM). We may use any browser engine to run JS, including the Spidermonkey in Firefox and the JS core in Safari. It is mostly a client-side application. As a result, it's employed in front-end development. TypedJS, RamdaJS, and other famous JS frameworks are examples.</p>
         <span>javascript</span>
         <p>It's a Javascript runtime environment that lets you use this programming language on the server as well. NodeJS allows us to run JS code outside of the browser. Because it works on the server, it allows us to use JS there as well. On the other hand, Node.JS lacks the ability to add certain HTML tags. We have the V8 JS engine inside of Node.JS. It aids in the parsing and execution of JS code.</p>
         </div>

         <div className="blog-text2">
         <h3>Quesiton : Differences between sql and nosql databases</h3>
         <span>sql</span>
        <p>These databases have a predefined or fixed schema. These databases are not designed to store hierarchical data. Complex queries are best served by these databases. Scalable vertically. ACID property is followed.</p>
         <span>nosql</span>
         <p>They have a flexible schema. These databases are great for storing hierarchical data. Complex queries are not well served by these databases. Scalable horizontally. CAP is followed (consistency, availability, partition tolerance)</p>
         </div>

         <div className="blog-text3">
         <h3>Quesiton : What is the purpose of jwt and how does it work</h3>
        
        <p>First, some terms of art must be clarified. It's not rare to hear a REST API referred to simply as an API. Similarly, JWTs are frequently confused with the JWT-based authentication scheme. JWT is nothing more than an open standard (RFC 7519) for sending messages via HTTP. As a standard, JWT can be applied to any message. It has one special feature that makes it an excellent tool for conveying a user's identification to a backend service. A JWT's integrity may be trusted because it is signed, making it tamper-proof.The properties of a JWT make it an excellent candidate for token-based authentication. We need a small package because it will be included in every request to our REST API. It must also be tamper-proof, so that the identity claim cannot be spoofed or changed in transit.
            <br/>
            <br/>

One of the most appealing aspects of this method is that it is stateless. It is not necessary for the client or the REST server to keep track of sessions. To validate the identity of the requesting user, no database check is necessary at all. We can (and must, for this authentication scheme to work) implicitly assume that this user is who they claim to be because the JWT is signed with a secret kept by the REST API. Lookups in databases</p>
        
         </div>
      


         </div>
    </div>
    );
};

export default Blog;