import React from "react";
// import "../dash-asset/css/dashboard.css";
import "../dash-asset/vendor/bootstrap/css/bootstrap.min.css";
import logo from "../dash-asset/img/radiant.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div class="d-flex align-items-center justify-content-between">
          <Link to={"/"} class="logo d-flex align-items-center" >
             <img src={logo} alt="logo" /> 
             <span class="d-none d-lg-block">Admin</span>
          </Link>          
        </div>

        <nav class="header-nav ms-auto">
          <ul class="d-flex align-items-center">
            

            {/* <li class="nav-item dropdown">
              <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i class="bi bi-bell"></i>
                <span class="badge bg-primary badge-number">4</span>
              </a>

              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li class="dropdown-header">
                  You have 4 new notifications
                  <a href="#">
                    <span class="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li class="notification-item">
                  <i class="bi bi-exclamation-circle text-warning"></i>
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                  </div>
                </li>

                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li class="notification-item">
                  <i class="bi bi-x-circle text-danger"></i>
                  <div>
                    <h4>Atque rerum nesciunt</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>1 hr. ago</p>
                  </div>
                </li>

                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li class="notification-item">
                  <i class="bi bi-check-circle text-success"></i>
                  <div>
                    <h4>Sit rerum fuga</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>2 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li class="notification-item">
                  <i class="bi bi-info-circle text-primary"></i>
                  <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li class="dropdown-footer">
                  <a href="#">Show all notifications</a>
                </li>
              </ul>
            </li> */}

            {/* <li class="nav-item dropdown">
              <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i class="bi bi-chat-left-text"></i>
                <span class="badge bg-success badge-number">3</span>
              </a>

              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                <li class="dropdown-header">
                  You have 3 new messages
                  <a href="#">
                    <span class="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li class="message-item">
                  <a href="#">
                    <img
                      src="assets/img/messages-1.jpg"
                      alt=""
                      class="rounded-circle"
                    />
                    <div>
                      <h4>Maria Hudson</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>4 hrs. ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li class="message-item">
                  <a href="#">
                    <img
                      src="assets/img/messages-2.jpg"
                      alt=""
                      class="rounded-circle"
                    />
                    <div>
                      <h4>Anna Nelson</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>6 hrs. ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li class="message-item">
                  <a href="#">
                    <img
                      src="assets/img/messages-3.jpg"
                      alt=""
                      class="rounded-circle"
                    />
                    <div>
                      <h4>David Muldon</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>8 hrs. ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li class="dropdown-footer">
                  <a href="#">Show all messages</a>
                </li>
              </ul>
            </li> */}

            <li class="pe-3">
              <Link
                class="nav-link d-flex align-items-center pe-0"
                to={""}                
              >
                {/* <img
                  src="assets/img/profile-img.jpg"
                  alt="Profile"
                  class="rounded-circle"
                /> */}
                
                  K. Anderson
                
              </Link>

              {/* <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li class="dropdown-header">
                  <h6>Kevin Anderson</h6>
                  <span>Web Designer</span>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="users-profile.html"
                  >
                    <i class="bi bi-person"></i>
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="users-profile.html"
                  >
                    <i class="bi bi-gear"></i>
                    <span>Account Settings</span>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="pages-faq.html"
                  >
                    <i class="bi bi-question-circle"></i>
                    <span>Need Help?</span>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="../index.html"
                  >
                    <i class="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </a>
                </li>
              </ul> */}
            </li>
          </ul>
        </nav>
      </header>

      <aside id="sidebar" class="sidebar">
        <ul class="sidebar-nav" id="sidebar-nav">
          <li class="nav-item">
            <Link class="nav-link " to={"/dashboard"}>
            <i class="bi bi-grid"></i>
            <span>Dashboard</span>
            </Link>
          </li>

          {/* pages start */}

          <li class="nav-heading">Pages</li>

          <li class="nav-item">
            <Link class="nav-link collapsed" to={"/employee"}>
              <i class="bi bi-person"></i>
              <span>My Profile</span>
            </Link>
          </li>

          {/* <li class="nav-item">
            <Link className="nav-link collapsed" to={"/register"}>
              <i class="bi bi-card-list"></i>
              <span>Register</span>
            </Link>
          </li> */}

          {/* <li class="nav-item">
            <Link className="nav-link collapsed" to={"/login"}>
              <i class="bi bi-card-list"></i>
              <span>Login</span>
            </Link>
          </li> */}

          <li class="nav-item">
            <Link class="nav-link collapsed" to={'/error'}>
            <i class="bi bi-dash-circle"></i>
              <span>Error 404</span>
            </Link>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="pages-blank.html">
              <i class="bi bi-file-post-fill"></i>
              <span>Manage Claims</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="pages-blank 2.html">
              <i class="bi bi-file-earmark-text"></i>
              <span>Policies</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="pages-blank 2.html">
              <i class="bi bi-chat-left-text"></i>
              <span>Messages</span>
            </a>
          </li>
        </ul>
      </aside>

      <main id="main" class="main">
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
                              <a href="#">#2457</a>
                            </th>
                            <td>Brandon Jacob</td>
                            <td>
                              <a href="" class="text-primary">
                                At praesentium minu
                              </a>
                            </td>
                            <td>$64</td>
                            <td>
                              <span class="badge bg-success">Approved</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">#2147</a>
                            </th>
                            <td>Bridie Kessler</td>
                            <td>
                              <a href="#" class="text-primary">
                                Blanditiis dolor omnis similique
                              </a>
                            </td>
                            <td>$47</td>
                            <td>
                              <span class="badge bg-warning">Pending</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">#2049</a>
                            </th>
                            <td>Ashleigh Langosh</td>
                            <td>
                              <a href="#" class="text-primary">
                                At recusandae consectetur
                              </a>
                            </td>
                            <td>$147</td>
                            <td>
                              <span class="badge bg-success">Approved</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">#2644</a>
                            </th>
                            <td>Angus Grady</td>
                            <td>
                              <a href="#" class="text-primar">
                                Ut voluptatem id earum et
                              </a>
                            </td>
                            <td>$67</td>
                            <td>
                              <span class="badge bg-danger">Rejected</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="#">#2644</a>
                            </th>
                            <td>Raheem Lehner</td>
                            <td>
                              <a href="#" class="text-primary">
                                Sunt similique distinctio
                              </a>
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
      
    </>
  );
};

export default Dashboard;