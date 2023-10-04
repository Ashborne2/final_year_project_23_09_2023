import React from "react";
import "../assets/css/style.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Toast } from "bootstrap";
import toast from "react-hot-toast";


export const Navbar = () => {
  const [isloggedin, setIsLoggedin] = useState(false);


  useEffect(() => {     // Retrieve the token from local storage     
    const token = localStorage.getItem('token');      // Check if the token exists and is not expired     
    if (token) { 
      // You may want to implement token validation here       
      // For simplicity, we'll assume a token is valid if it exists       
      setIsLoggedin(true);
      
      
    } else {
      setIsLoggedin(false);
    }
  }, []);

  const handleLogout = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedin(false);
    // window.location.reload();
    toast.success("Logged Out Successfully")
  };



  const handleClick = (event) => {
    event.currentTarget.classList.toggle("bi-list");
    event.currentTarget.classList.toggle("bi-x");
    // console.log(event.target.classList.toggle('navbar-Mobile'));
    event.currentTarget.classList.toggle("mobile-nav-toggle");
    const change = "navbar";
    const elementToChange = document.getElementById(change);
    if (elementToChange) {
      elementToChange.classList.remove("navbar");
      elementToChange.classList.toggle("navbar-mobile");
      console.log(elementToChange); // Add your new class
    }
  };

  // let token = localStorage.getItem("token");
  // console.log(token);

  // if (!token) {
  //   setIsLoggedin(false);
  // }


  return (
    <header id="header" class="fixed-top ">
      <div class="container d-flex align-items-center justify-content-between">
        <h1 class="logo">
          <Link to={"/"} className="no_underline">
            <img src="assets/img/radiant.png" alt="" class="img-fluid" />
            <strong>Insurance</strong>
          </Link>
        </h1>

        {/* <nav id="navbar" class="navbar">
       
          <ul>
            <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a class="nav-link scrollto" href="#about">About</a></li>
            <li><a class="nav-link scrollto" href="#services">Services</a></li>
            <li><Link to={"/claim"} className="nav-link scrollto " >Claims</Link></li>

            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
            <li><Link to={"/login"} class="getstarted scrollto no_underline">Login</Link></li>
            
          </ul>
          <i class="bi bi-list mobile-nav-toggle" onClick={handleClick} ></i>
        </nav> */}

        <nav id="navbar" class="navbar">
          {isloggedin ? (
            <ul>
              <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a class="nav-link scrollto" href="#about">About</a></li>
              <li><a class="nav-link scrollto" href="#services">Services</a></li>
              <li><Link to={"/claim"} className="nav-link scrollto " >Claims</Link></li>

              <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
              <li><Link to={""} onClick={handleLogout} class="getstarted scrollto no_underline">Log Out</Link></li>
              <i class="bi bi-list mobile-nav-toggle" onClick={handleClick} ></i>
            </ul>
          ) : (
            <ul>
              <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a class="nav-link scrollto" href="#about">About</a></li>
              <li><a class="nav-link scrollto" href="#services">Services</a></li>
              <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
              <li><Link to={"/login"} class="getstarted scrollto no_underline">Login</Link></li>
              <i class="bi bi-list mobile-nav-toggle" onClick={handleClick} ></i>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};
