import React from "react";
import "../dash-asset/css/dashboard.css";
// import "../dash-asset/vendor/bootstrap/css/bootstrap.min.css";
// import logo from "../dash-asset/img/radiant.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
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


  // const handleLogout = () => {

  //   localStorage.removeItem('token');
  //   localStorage.removeItem('user');
  //   setIsLoggedin(false);

  //   setTimeout(() => {
  //     navigate('/login');
  //     // toast.success("Logged Out Successfully")
  //   }, 800); 
  // };


  return (
    <>

      <div class="container-fluid">
        <div class="row flex-nowrap">
          {/* <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
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
                <li>
                  <Link to={'/admin/emprofile'} class="nav-link px-0 align-middle">
                   
                    <span class="ms-1 d-none d-sm-inline">My Profile</span> </Link>
                </li>

                <li>
                  <Link to={'/admin/emprofile'} class="nav-link px-0 align-middle">
                   
                    <span class="ms-1 d-none d-sm-inline">User Management</span> </Link>
                </li>

                <li>
                  <Link to={'/admin/admin_claim'} class="nav-link px-0 align-middle">
                  
                    <span class="ms-1 d-none d-sm-inline">Manage Claims</span></Link>
                </li>

                <li>
                  <Link to={'/admin/admin_policy'} class="nav-link px-0 align-middle">
                 
                    <span class="ms-1 d-none d-sm-inline">Policies</span> </Link>
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
              <div style={{margin:"20px"}}>
                <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" class="rounded-circle shadow-4" style={{ width: "40px",marginLeft:"40px" }} alt="avatar" />
                <h6 class="fw-bold text-white">logged in as {username}</h6>                
              </div>
             
              
              <button class="custom-btn btn-11" onClick={handleLogout}><span>LOGOUT</span></button>
            </div>
          </div> */}

          <div class="col py-3">
            <main id="dash-main" class="dash-main">
              <div class="pagetitle">
                <h1>Dashboard</h1>
              </div>

              <section class="section dashboard">
                <div class="row">
                  <div class="col-lg-8">
                    <div class="row">
                      <div class="col-xxl-4 col-md-6">
                        <div class="card info-card sales-card">
                          <div class="card-body">
                            <h5 class="card-title t1">Total claims</h5>
                            <div class="d-flex align-items-center">
                              <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                <i class="ri-file-list-3-line"></i>
                              </div>
                              <div class="ps-3">
                                <h6>145</h6>
                                <span class="text-success small pt-1 fw-bold">
                                  12%
                                </span>{" "}
                                <span class="text-muted small pt-2 ps-1">
                                  increase
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-xxl-4 col-md-6">
                        <div class="card info-card revenue-card">
                          <div class="card-body">
                            <h5 class="card-title t1">Claims Resolved</h5>

                            <div class="d-flex align-items-center">
                              <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                <i class="ri-article-fill"></i>
                              </div>
                              <div class="ps-3">
                                <h6>$3,264</h6>
                                <span class="text-success small pt-1 fw-bold">
                                  8%
                                </span>{" "}
                                <span class="text-muted small pt-2 ps-1">
                                  increase
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-xxl-4 col-xl-12">
                        <div class="card info-card customers-card">
                          <div class="card-body">
                            <h5 class="card-title t1">Claims in review</h5>

                            <div class="d-flex align-items-center">
                              <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                <i class="ri-draft-line"></i>
                              </div>
                              <div class="ps-3">
                                <h6>1244</h6>
                                <span class="text-danger small pt-1 fw-bold">
                                  12%
                                </span>{" "}
                                <span class="text-muted small pt-2 ps-1">
                                  decrease
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="card recent-sales overflow-auto">
                          <div class="card-body">
                            <h5 class="card-title">
                              Recent Sales <span>| Today</span>
                            </h5>

                            <table class="table table-borderless datatable">
                              <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Customer</th>
                                  <th scope="col">Product</th>
                                  <th scope="col">Price</th>
                                  <th scope="col">Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">
                                    #2457
                                  </th>
                                  <td>Brandon Jacob</td>
                                  <td>
                                    
                                      At praesentium minu
                                    
                                  </td>
                                  <td>$64</td>
                                  <td>
                                    <span class="badge bg-success">Approved</span>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">
                                    #2147
                                  </th>
                                  <td>Bridie Kessler</td>
                                  <td>
                                    
                                      Blanditiis dolor omnis similique
                                    
                                  </td>
                                  <td>$47</td>
                                  <td>
                                    <span class="badge bg-warning">Pending</span>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">
                                    #2049
                                  </th>
                                  <td>Ashleigh Langosh</td>
                                  <td>
                                    
                                      At recusandae consectetur
                                    
                                  </td>
                                  <td>$147</td>
                                  <td>
                                    <span class="badge bg-success">Approved</span>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">
                                    #2644
                                  </th>
                                  <td>Angus Grady</td>
                                  <td>
                                    
                                      Ut voluptatem id earum et
                                    
                                  </td>
                                  <td>$67</td>
                                  <td>
                                    <span class="badge bg-danger">Rejected</span>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">
                                    #2644
                                  </th>
                                  <td>Raheem Lehner</td>
                                  <td>                                  
                                      Sunt similique distinctio
                                    
                                  </td>
                                  <td>$165</td>
                                  <td>
                                    <span class="badge bg-success">Approved</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="card top-selling overflow-auto">
                          <div class="card-body pb-0">
                            <h5 class="card-title">
                              Performance evaluation <span>| Charts</span>
                            </h5>

                            

                            {/* <table class="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col">Preview</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Sold</th>
                            <th scope="col">Revenue</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <a href="#">
                                <img src="assets/img/product-1.jpg" alt="" />
                              </a>
                            </th>
                            <td>
                              <a href="#" class="text-primary fw-bold">
                                Ut inventore ipsa voluptas nulla
                              </a>
                            </td>
                            <td>$64</td>
                            <td class="fw-bold">124</td>
                            <td>$5,828</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">
                                <img src="assets/img/product-2.jpg" alt="" />
                              </a>
                            </th>
                            <td>
                              <a href="#" class="text-primary fw-bold">
                                Exercitationem similique doloremque
                              </a>
                            </td>
                            <td>$46</td>
                            <td class="fw-bold">98</td>
                            <td>$4,508</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">
                                <img src="assets/img/product-3.jpg" alt="" />
                              </a>
                            </th>
                            <td>
                              <a href="#" class="text-primary fw-bold">
                                Doloribus nisi exercitationem
                              </a>
                            </td>
                            <td>$59</td>
                            <td class="fw-bold">74</td>
                            <td>$4,366</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">
                                <img src="assets/img/product-4.jpg" alt="" />
                              </a>
                            </th>
                            <td>
                              <a href="#" class="text-primary fw-bold">
                                Officiis quaerat sint rerum error
                              </a>
                            </td>
                            <td>$32</td>
                            <td class="fw-bold">63</td>
                            <td>$2,016</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">
                                <img src="assets/img/product-5.jpg" alt="" />
                              </a>
                            </th>
                            <td>
                              <a href="#" class="text-primary fw-bold">
                                Sit unde debitis delectus repellendus
                              </a>
                            </td>
                            <td>$79</td>
                            <td class="fw-bold">41</td>
                            <td>$3,239</td>
                          </tr>
                        </tbody>
                      </table> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="card">
                      <div class="filter">
                        <a class="icon" href="#" data-bs-toggle="dropdown">
                          <i class="bi bi-three-dots"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li class="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li>
                            <a class="dropdown-item" href="#">
                              Today
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              This Week
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              This Month
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              This Year
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">
                          Recent Claims <span>| Today</span>
                        </h5>

                        <div class="activity">
                          <div class="activity-item d-flex">
                            <div class="activite-label">32 min</div>
                            <i class="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                            <div class="activity-content">
                              Quia quae rerum{" "}
                              <a href="#" class="fw-bold text-dark">
                                explicabo officiis
                              </a>{" "}
                              beatae
                            </div>
                          </div>

                          <div class="activity-item d-flex">
                            <div class="activite-label">56 min</div>
                            <i class="bi bi-circle-fill activity-badge text-danger align-self-start"></i>
                            <div class="activity-content">
                              Voluptatem blanditiis blanditiis eveniet
                            </div>
                          </div>

                          <div class="activity-item d-flex">
                            <div class="activite-label">2 hrs</div>
                            <i class="bi bi-circle-fill activity-badge text-primary align-self-start"></i>
                            <div class="activity-content">
                              Voluptates corrupti molestias voluptatem
                            </div>
                          </div>

                          <div class="activity-item d-flex">
                            <div class="activite-label">1 day</div>
                            <i class="bi bi-circle-fill activity-badge text-info align-self-start"></i>
                            <div class="activity-content">
                              Tempore autem saepe{" "}
                              <a href="#" class="fw-bold text-dark">
                                occaecati voluptatem
                              </a>{" "}
                              tempore
                            </div>
                          </div>

                          <div class="activity-item d-flex">
                            <div class="activite-label">2 days</div>
                            <i class="bi bi-circle-fill activity-badge text-warning align-self-start"></i>
                            <div class="activity-content">
                              Est sit eum reiciendis exercitationem
                            </div>
                          </div>

                          <div class="activity-item d-flex">
                            <div class="activite-label">4 weeks</div>
                            <i class="bi bi-circle-fill activity-badge text-muted align-self-start"></i>
                            <div class="activity-content">
                              Dicta dolorem harum nulla eius. Ut quidem quidem sit
                              quas
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-body pb-0">
                        <h5 class="card-title">
                          Website Traffic <span>| Today</span>
                        </h5>

                        {/* <div
                    id="trafficChart"
                    style={{ height: "400px" }}
                    class="echart"
                  ></div> */}

                      </div>
                    </div>

                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>

    </>
  );
};

export default Dashboard;