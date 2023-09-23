import React from 'react'
import "../assets/css/style.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Navbar = () => {
  // const [isActive, setIsActive] = useState(false);

  // const handleClick = () => {
  //   setIsActive(true);
  // };
  const handleClick = (event) => {
    event.currentTarget.classList.toggle('bi-list');
    event.currentTarget.classList.toggle('bi-x');
    // console.log(event.target.classList.toggle('navbar-Mobile'));
    event.currentTarget.classList.toggle('mobile-nav-toggle');
    const change='navbar';
    const elementToChange = document.getElementById(change);
    if (elementToChange) {
      elementToChange.classList.remove('navbar');
      elementToChange.classList.toggle('navbar-mobile');
      console.log(elementToChange); // Add your new class
    }
    
  };

  
  return (
    <header id="header" class="fixed-top ">
    
    <div class="container d-flex align-items-center justify-content-between">
      
      <h1 class="logo">
        <Link to={"/"} className='no_underline'><img src="assets/img/radiant.png" alt="" class="img-fluid" /><strong>Insurance</strong></Link>
        {/* <a href="index.html"><img src="assets/img/radiant.png" alt="" class="img-fluid"/><strong>Insurance</strong>
        </a> */}
      </h1>
     
      

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
           <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><Link to={"/claim"} className="nav-link scrollto " >Claims</Link></li>
          {/* <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> */}
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          <li><Link to={"/login"} class="getstarted scrollto no_underline">Login</Link></li>
          {/* <li><a  href="Admin/index.html">Login</a></li> */}
        </ul>
        <i class="bi bi-list mobile-nav-toggle" onClick={handleClick} ></i>
      </nav>

    </div>
  </header>
  )
}
