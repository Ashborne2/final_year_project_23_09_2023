import React from "react";
import "../assets/css/style.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Toast } from "bootstrap";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export const Navbar = () => {
  const navigate = useNavigate();
  const [isloggedin, setIsLoggedin] = useState(false);
  const [username, setUsername] = useState("");


  useEffect(() => {     // Retrieve the token from local storage     
    const token = localStorage.getItem('token');      // Check if the token exists and is not expired     
    if (token) { 
      // You may want to implement token validation here       
      // For simplicity, we'll assume a token is valid if it exists       
      setIsLoggedin(true);
      setUsername(JSON.parse(localStorage.getItem('user')).username);
      
    } else {
      setIsLoggedin(false);
    }
  }, []);

  const handleLogout = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedin(false);

    setTimeout(() => {
      navigate('/login');
      toast.success("Logged Out Successfully")
    }, 800);
    // window.location.reload();
    
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
    <header id="header" className="fixed-top ">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <Link to={"/"} className="no_underline">
            <img src="assets/img/radiant.png" alt="" class="img-fluid" />
            <strong>Insurance</strong>
          </Link>
        </h1>


        <nav id="navbar" className="navbar">
          {isloggedin ? (
            <ul>
              <li><NavLink className="nav-link scrollto " activeclassName="active" to={'/'}>Home</NavLink></li>
              {/* <li><a className="nav-link scrollto" href="#about">About</a></li> */}
              <li><NavLink  className="nav-link scrollto" activeclassName="active" to={"/policyservice"}>Policy Services</NavLink></li>
              <li><NavLink to={"/claim"} className="nav-link scrollto" activeclassName="active" >Claims</NavLink></li>
              <li><NavLink to={"/message"} className="nav-link scrollto" activeclassName="active" >Messages</NavLink></li>              
              <li><NavLink onClick={handleLogout} className="getstarted scrollto">Log Out</NavLink></li>
              <li style={{color:"white"}}><strong>{username}</strong></li>
              <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" class="rounded-circle shadow-4" style={{ width: "40px",marginLeft:"10px" }} alt="avatar" />
              <i className="bi bi-list mobile-nav-toggle" onClick={handleClick} ></i>
            </ul>
          ) : (
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              {/* <li><a className="nav-link scrollto" href="#about">About</a></li> */}
              <li><a className="nav-link scrollto" href="#services">Services</a></li>
              {/* <li><a className="nav-link scrollto" href="#contact">Contact</a></li> */}
              <li><NavLink to={"/login"} className="getstarted scrollto">Login</NavLink></li>
              <i className="bi bi-list mobile-nav-toggle" onClick={handleClick} ></i>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};
