import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Navbar.css'

const Navbar = () => {
    const [user] = useAuthState (auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
    <div>
<nav class="navbar fixed-top navbar-expand-lg  navbar-light nav-background ">
  <div class="container  ">
    <a class="navbar-brand text-light" href="#">FurnitureStockHub</a>
    <button class="navbar-toggler text-light  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon text-light  "></span>
    </button>
    <div class="collapse navbar-collapse text-light text-left" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0  text-left " >
        <li class="nav-item ">
          <Link className='text-light' to='home' href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link className='text-light' to='inventoryManagement' href="#">Manage Item</Link>
        </li>
        <li class="nav-item">
          <Link className='text-light' to='inventoryManagement' href="#">Add Item</Link>
        </li>
        <li class="nav-item">
          <Link className='text-light' to='myItem' href="#">My Item</Link>
        </li>
        <li class="nav-item">
          <Link className='text-light' to='blog' href="#">Blog</Link>
        </li>
        <li class="nav-item">
        { 
              user ?
             <button onClick={handleSignOut} className='btn btn-light  btn-align btn-col '>Logout</button>
            :
            <Link className='text-white link mt-2'to='login'>Login</Link>}
        </li>
      
      </ul>
    </div>
  </div>
</nav>




    {/* <nav className="navbar fixed-top navbar-expand-lg col-sm-12 navbar-dark nav-background text-white">
    <div className='container text-center col-sm-12'>
    <a href="#" className='navbar-brand'>FurnitureStockHub</a>
    <button type='button'
    className='navbar-toggler  btn-primary'
    data-bs-target ="#navbarNav"
    data-bs-toggle="collapse"
    aria-controls='navbarNav'
     aria-expanded="false"
     aria-lable="Toggle Navbar">  
        <span className='navbar-toggler-icon'></span>
    </button>
    <div className='collapse navbar-collapse' id ="navbarNav">
        <div className="mx-auto">

        </div>

     <ul className='navbar-nav nav-align'>
     <li className="nav-item "> <Link className='nav-link text-white' to='home'>Home</Link></li>
     <li className="nav-item ml-3"><Link className='nav-link text-white' to=''>My Item</Link></li>
     <li className="nav-item ml-3"><Link className='nav-link text-white' to='inventoryManagement'>Blog</Link></li>
     <li className="nav-item ml-3">
         { 
              user ?
             <button onClick={handleSignOut} className='btn btn-light  btn-align btn-col '>Logout</button>
            :
            <Link className='text-white link mt-2'to='login'>Login</Link>}
            </li>
     </ul>
    </div>
    </div>

    </nav> */}




















        </div>
    );

};

export default Navbar;