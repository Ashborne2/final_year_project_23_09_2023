import React from "react";
import "../assets/css/style.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Adminnav = () => {

  const navigate = useNavigate();

  const [isloggedin, setIsLoggedin] = useState(false);
  const [username, setUsername] = useState("");
  const [userType, setUserType] = useState({});

  useEffect(() => {     // Retrieve the token from local storage     
    const token = localStorage.getItem('token');      // Check if the token exists and is not expired     
    if (token) {
      // You may want to implement token validation here       
      // For simplicity, we'll assume a token is valid if it exists       
      setIsLoggedin(true);
      setUsername(JSON.parse(localStorage.getItem('user')).username);
      setUserType(JSON.parse(localStorage.getItem('user')).userType);


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
      // toast.success("Logged Out Successfully")
    }, 800);
  };

  return (
    <>
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span class="fs-5 d-none d-sm-inline">Admin Panel</span>
          </a>
          {isloggedin ? (
            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li class="nav-item">
                <Link to={'/admin'} class="nav-link align-middle px-0">

                  <span class="ms-1 d-none d-sm-inline">
                    Dashboard
                  </span>
                </Link>
              </li>




              {userType !== "Agent" ? (
                <div>
                  <li>
                    <Link to={'/admin/admin_user'} class="nav-link px-0 align-middle">
                      <span class="ms-1 d-none d-sm-inline">User Management</span> </Link>
                  </li>
                  <li>
                    <Link to={'/admin/admin_policy'} class="nav-link px-0 align-middle">
                      <span class="ms-1 d-none d-sm-inline">Policies</span> </Link>
                  </li>
                </div>



              ) : (
                <div>
                  <li>
                    <Link to={'/admin/emprofile'} class="nav-link px-0 align-middle">

                      <span class="ms-1 d-none d-sm-inline">My Profile</span> </Link>
                  </li>
                  <li>
                    <Link to={'/admin/admin_policy'} class="nav-link px-0 align-middle">

                      <span class="ms-1 d-none d-sm-inline">Policies</span> </Link>
                  </li>

                </div>




              )}





              <li>
                <Link to={'/admin/admin_claim'} class="nav-link px-0 align-middle">
                  <span class="ms-1 d-none d-sm-inline">Manage Claims</span></Link>
              </li>


              <li>
                <Link to={'#'} class="nav-link px-0 align-middle">
                  <span class="ms-1 d-none d-sm-inline">Messages</span> </Link>
              </li>


            </ul>
          ) : (
            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li class="nav-item">
                you are not logged in
              </li>
            </ul>
          )}

          <hr />
          <div style={{ margin: "20px" }}>
            <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" class="rounded-circle shadow-4" style={{ width: "40px", marginLeft: "40px" }} alt="avatar" />
            <h6 class="fw-bold text-white">logged in as {username}</h6>
          </div>


          <button class="custom-btn btn-11" onClick={handleLogout}><span>LOGOUT</span></button>

        </div>
      </div>

    </>
  )
};

export default Adminnav;
