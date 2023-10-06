import React from "react";
import "../dash-asset/css/dashboard.css";
// import "../dash-asset/vendor/bootstrap/css/bootstrap.min.css";
import logo from "../dash-asset/img/radiant.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      {/* <header
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

            <li class="pe-3">
              <Link
                class="nav-link d-flex align-items-center pe-0"
                to={""}
              >

                K. Anderson

              </Link>

            </li>
          </ul>
        </nav>
      </header> */}

      <div class="container-fluid">
        <div class="row flex-nowrap">
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span class="fs-5 d-none d-sm-inline">Menu</span>
              </a>
              <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li class="nav-item">
                  <Link to={'/admin'} class="nav-link align-middle px-0">
                    <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">
              Dashboard
            </span>
                  </Link>
                </li>
                <li>
                  <Link to={'/admin/emprofile'} data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                    <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">My Profile</span> </Link>
                  <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                    <li class="w-100">
                      <Link to={'#'} class="nav-link px-0"> <span class="d-none d-sm-inline">Claim history</span></Link>
                    </li>
                    <li>
                      <Link to={'#'} class="nav-link px-0"> <span class="d-none d-sm-inline">Rules and regulations </span></Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={'/admin/admin_claim'} class="nav-link px-0 align-middle">
                    <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Manage Claims</span></Link>
                </li>
                <li>
                  <Link to={'#'} data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                    <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Bootstrap</span></Link>
                  <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                    <li class="w-100">
                      <Link to={'#'} class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1</Link>
                    </li>
                    <li>
                      <Link to={""} class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={'#'} data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                    <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Policies</span> </Link>
                  <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                    <li class="w-100">
                      <Link to={'#'} class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 1</Link>
                    </li>
                    <li>
                      <Link to={'#'} class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 2</Link>
                    </li>
                    <li>
                      <Link to={'#'} class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 3</Link>
                    </li>
                    <li>
                      <Link to={'#'} class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 4</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={'#'} class="nav-link px-0 align-middle">
                    <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Messages</span> </Link>
                </li>
              </ul>
              <hr />
              <div class="dropdown pb-5">
                <Link to={"#"} class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={logo} alt="my profile image" width="30" height="30" class="rounded-circle" />
                  <span class="d-none d-sm-inline mx-1">My profile</span>
                </Link>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                  <li><Link class="dropdown-item" to={'#'}>New project...</Link></li>
                  <li><Link class="dropdown-item" to={'#'}>Settings</Link></li>
                  <li><Link class="dropdown-item" to={'#'}>Profile</Link></li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li><Link class="dropdown-item" to={'#'}>Sign out</Link></li>
                </ul>
              </div>
            </div>
          </div>
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
          </div>
        </div>
      </div>

      {/* <aside id="sidebar" class="sidebar">
        <ul class="sidebar-nav" id="sidebar-nav">
          <li class="nav-item">
            <Link class="nav-link " to={"/dashboard"}>
              <i class="bi bi-grid"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <li class="nav-heading">Pages</li>

          <li class="nav-item">
            <Link class="nav-link collapsed" to={"/admin/emprofile"}>
              <i class="bi bi-person"></i>
              <span>My Profile</span>
            </Link>
          </li>          

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
      </aside> */}



    </>
  );
};

export default Dashboard;