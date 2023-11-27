import React from "react";
import axios from "axios";
import { useState, getName } from 'react';
import { Link } from "react-router-dom";
// import "../dash-asset/css/dashboard.css";
// import "../dash-asset/vendor/bootstrap/css/bootstrap.min.css";
// import profileImage from "../dash-asset/img/profile-img.jpg";


const EmProfile = () => {

  //     const [data, setData] = useState([]);

  //   getName(() => {
  //     axios.get('Rofiquzzaman Roni')
  //       .then(response => {
  //         console.log(response);
  //         setData(response.data);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }, []);



  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5 d-none d-sm-inline">Menu</span>
              </a>
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-item">
                  <Link to={'/admin'} className="nav-link align-middle px-0">
                    {/* <i className="fs-4 bi-house"></i> */}
                    <span className="ms-1 d-none d-sm-inline">
                      Dashboard
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to={'/admin/emprofile'} className="nav-link px-0 align-middle">
                    {/* <i className="fs-4 bi-speedometer2"></i> */}
                    <span className="ms-1 d-none d-sm-inline">My Profile</span>
                  </Link>
                </li>
                <li>
                  <Link to={'/admin/emprofile'} className="nav-link px-0 align-middle">
                    {/* <i className="fs-4 bi-speedometer2"></i> */}
                    <span className="ms-1 d-none d-sm-inline">Claim Settled</span>
                  </Link>
                </li>
                <li>
                  <Link to={'/admin/admin_claim'} className="nav-link px-0 align-middle">
                    {/* <i className="fs-4 bi-table"></i> */}
                    <span className="ms-1 d-none d-sm-inline">Manage Claims</span>
                  </Link>
                </li>

                <li>
                  <Link to={'/admin/admin_policy'} className="nav-link px-0 align-middle">
                    {/* <i className="fs-4 bi-grid"></i> */}
                    <span className="ms-1 d-none d-sm-inline">Policies</span>
                  </Link>
                </li>

                <li>
                  <Link to={'#'} className="nav-link px-0 align-middle">
                    {/* <i className="fs-4 bi-people"></i> */}
                    <span className="ms-1 d-none d-sm-inline">Messages</span>
                  </Link>
                </li>
              </ul>
              <hr />
              <div className="dropdown pb-5">
                <Link to={"#"} className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  {/* <img src={''} alt="my profile image" width="30" height="30" className="rounded-circle" /> */}
                  <span className="d-none d-sm-inline mx-1">My profile</span>
                </Link>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                  <li><Link className="dropdown-item" to={'#'}>New project...</Link></li>
                  <li><Link className="dropdown-item" to={'#'}>Settings</Link></li>
                  <li><Link className="dropdown-item" to={'#'}>Profile</Link></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><Link className="dropdown-item" to={'#'}>Sign out</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col py-3">
            <main id="dash-main" className="dash-main">

              <div class="pagetitle">
                <h1>User Profile Control</h1>
              </div>

              <section class="section profile">
                <div class="row">
                  <div class="col-xl-4">
                    <div class="card">
                      <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                        <img
                          src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
                          alt="Profile"
                          class="rounded-circle"
                        />
                        {/* <h2 onLoad={getName}>{data}</h2> */}
                        <h3 style={{padding:"30px"}}>Name of User</h3>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-8">
                    <div class="card">
                      <div class="card-body pt-3">
                        <ul class="nav nav-tabs nav-tabs-bordered">
                          <li class="nav-item">
                            <button
                              class="nav-link active"
                              data-bs-toggle="tab"
                              data-bs-target="#profile-overview"
                            >
                              Overview
                            </button>
                          </li>

                          <li class="nav-item">
                            <button
                              class="nav-link"
                              data-bs-toggle="tab"
                              data-bs-target="#profile-edit"
                            >
                              Edit Profile
                            </button>
                          </li>

                          {/* <li class="nav-item">
                      <button
                        class="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-settings"
                      >
                        Settings
                      </button>
                    </li> */}

                          <li class="nav-item">
                            <button
                              class="nav-link"
                              data-bs-toggle="tab"
                              data-bs-target="#profile-change-password"
                            >
                              Change Password
                            </button>
                          </li>
                        </ul>
                        <div class="tab-content pt-2">
                          <div
                            class="tab-pane fade show active profile-overview"
                            id="profile-overview"
                          >
                            <h5 class="card-title">About</h5>
                            <p class="small fst-italic">
                              Sunt est soluta temporibus accusantium neque nam maiores
                              cumque temporibus. Tempora libero non est unde veniam
                              est qui dolor. Ut sunt iure rerum quae quisquam autem
                              eveniet perspiciatis odit. Fuga sequi sed ea saepe at
                              unde.
                            </p>

                            <h5 class="card-title">Profile Details</h5>

                            <div class="row">
                              <div class="col-lg-3 col-md-4 label ">Full Name</div>
                              <div class="col-lg-9 col-md-8">Kevin Anderson</div>
                            </div>

                            <div class="row">
                              <div class="col-lg-3 col-md-4 label">Company</div>
                              <div class="col-lg-9 col-md-8">
                                Lueilwitz, Wisoky and Leuschke
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-lg-3 col-md-4 label">Job</div>
                              <div class="col-lg-9 col-md-8">Web Designer</div>
                            </div>

                            <div class="row">
                              <div class="col-lg-3 col-md-4 label">Country</div>
                              <div class="col-lg-9 col-md-8">USA</div>
                            </div>

                            <div class="row">
                              <div class="col-lg-3 col-md-4 label">Address</div>
                              <div class="col-lg-9 col-md-8">
                                A108 Adam Street, New York, NY 535022
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-lg-3 col-md-4 label">Phone</div>
                              <div class="col-lg-9 col-md-8">
                                (436) 486-3538 x29071
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-lg-3 col-md-4 label">Email</div>
                              <div class="col-lg-9 col-md-8">
                                k.anderson@example.com
                              </div>
                            </div>
                          </div>

                          <div
                            class="tab-pane fade profile-edit pt-3"
                            id="profile-edit"
                          >
                            <form>
                              <div class="row mb-3">
                                <label
                                  for="profileImage"
                                  class="col-md-4 col-lg-3 col-form-label"
                                >
                                  Profile Image
                                </label>
                                <div class="col-md-8 col-lg-9">
                                  <img
                                    src="assets/img/profile-img.jpg"
                                    alt="Profile"
                                  />
                                  <div class="pt-2">
                                    <a
                                      href="#"
                                      class="btn btn-primary btn-sm"
                                      title="Upload new profile image"
                                    >
                                      <i class="bi bi-upload"></i>
                                    </a>
                                    <a
                                      href="#"
                                      class="btn btn-danger btn-sm"
                                      title="Remove my profile image"
                                    >
                                      <i class="bi bi-trash"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>

                              <div class="row mb-3">
                                <label
                                  for="fullName"
                                  class="col-md-4 col-lg-3 col-form-label"
                                >
                                  Full Name
                                </label>
                                <div class="col-md-8 col-lg-9">
                                  <input
                                    name="fullName"
                                    type="text"
                                    class="form-control"
                                    id="fullName"
                                    value="Kevin Anderson"
                                  />
                                </div>
                              </div>

                              <div class="row mb-3">
                                <label
                                  for="about"
                                  class="col-md-4 col-lg-3 col-form-label"
                                >
                                  About
                                </label>
                                <div class="col-md-8 col-lg-9">
                                  <textarea
                                    name="about"
                                    class="form-control"
                                    id="about"
                                    style={{ height: '100px' }}
                                  >
                                    Sunt est soluta temporibus accusantium neque nam
                                    maiores cumque temporibus. Tempora libero non est
                                    unde veniam est qui dolor. Ut sunt iure rerum quae
                                    quisquam autem eveniet perspiciatis odit. Fuga
                                    sequi sed ea saepe at unde.
                                  </textarea>
                                </div>
                              </div>

                              <div class="row mb-3">
                                <label
                                  for="company"
                                  class="col-md-4 col-lg-3 col-form-label"
                                >
                                  Company
                                </label>
                                <div class="col-md-8 col-lg-9">
                                  <input
                                    name="company"
                                    type="text"
                                    class="form-control"
                                    id="company"
                                    value="Lueilwitz, Wisoky and Leuschke"
                                  />
                                </div>
                              </div>

                              <div class="row mb-3">
                                <label
                                  for="Job"
                                  class="col-md-4 col-lg-3 col-form-label"
                                >
                                  Job
                                </label>
                                <div class="col-md-8 col-lg-9">
                                  <input
                                    name="job"
                                    type="text"
                                    class="form-control"
                                    id="Job"
                                    value="Web Designer"
                                  />
                                </div>
                              </div>

                              <div class="row mb-3">
                                <label
                                  for="Country"
                                  class="col-md-4 col-lg-3 col-form-label"
                                >
                                  Country
                                </label>
                                <div class="col-md-8 col-lg-9">
                                  <input
                                    name="country"
                                    type="text"
                                    class="form-control"
                                    id="Country"
                                    value="USA"
                                  />
                                </div>
                              </div>

                              <div class="row mb-3">
                                <label
                                  for="Address"
                                  class="col-md-4 col-lg-3 col-form-label"
                                >
                                  Address
                                </label>
                                <div class="col-md-8 col-lg-9">
                                  <input
                                    name="address"
                                    type="text"
                                    class="form-control"
                                    id="Address"
                                    value="A108 Adam Street, New York, NY 535022"
                                  />
                                </div>
                              </div>

                              <div class="row mb-3">
                                <label
                                  for="Phone"
                                  class="col-md-4 col-lg-3 col-form-label"
                                >
                                  Phone
                                </label>
                                <div class="col-md-8 col-lg-9">
                                  <input
                                    name="phone"
                                    type="text"
                                    class="form-control"
                                    id="Phone"
                                    value="(436) 486-3538 x29071"
                                  />
                                </div>
                              </div>

                              <div class="row mb-3">
                                <label
                                  for="Email"
                                  class="col-md-4 col-lg-3 col-form-label"
                                >
                                  Email
                                </label>
                                <div class="col-md-8 col-lg-9">
                                  <input
                                    name="email"
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    value="k.anderson@example.com"
                                  />
                                </div>
                              </div>

                              <div class="row mb-3">
                                <label
                                  for="Twitter"
                                  class="col-md-4 col-lg-3 col-form-label"
                                >
                                  Twitter Profile
                                </label>
                                <div class="col-md-8 col-lg-9">
                                  <input
                                    name="twitter"
                                    type="text"
                                    class="form-control"
                                    id="Twitter"
                                    value="https://twitter.com/#"
                                  />
                                </div>
                              </div>

                              <div class="row mb-3">
                                <label
                                  for="Facebook"
                                  class="col-md-4 col-lg-3 col-form-label"
                                >
                                  Facebook Profile
                                </label>
                                <div class="col-md-8 col-lg-9">
                                  <input
                                    name="facebook"
                                    type="text"
                                    class="form-control"
                                    id="Facebook"
                                    value="https://facebook.com/#"
                                  />
                                </div>
                              </div>

                              <div class="row mb-3">
                                <label
                                  for="Instagram"
                                  class="col-md-4 col-lg-3 col-form-label"
                                >
                                  Instagram Profile
                                </label>
                                <div class="col-md-8 col-lg-9">
                                  <input
                                    name="instagram"
                                    type="text"
                                    class="form-control"
                                    id="Instagram"
                                    value="https://instagram.com/#"
                                  />
                                </div>
                              </div>

                              <div class="row mb-3">
                                <label
                                  for="Linkedin"
                                  class="col-md-4 col-lg-3 col-form-label"
                                >
                                  Linkedin Profile
                                </label>
                                <div class="col-md-8 col-lg-9">
                                  <input
                                    name="linkedin"
                                    type="text"
                                    class="form-control"
                                    id="Linkedin"
                                    value="https://linkedin.com/#"
                                  />
                                </div>
                              </div>

                              <div class="text-center">
                                <button type="submit" class="btn btn-primary">
                                  Save Changes
                                </button>
                              </div>
                            </form>
                          </div>

                          {/* <div class="tab-pane fade pt-3" id="profile-settings">
                      <form>
                        <div class="row mb-3">
                          <label
                            for="fullName"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Email Notifications
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="changesMade"
                                checked
                              />
                              <label class="form-check-label" for="changesMade">
                                Changes made to your account
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="newProducts"
                                checked
                              />
                              <label class="form-check-label" for="newProducts">
                                Information on new products and services
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="proOffers"
                              />
                              <label class="form-check-label" for="proOffers">
                                Marketing and promo offers
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="securityNotify"
                                checked
                                disabled
                              />
                              <label
                                class="form-check-label"
                                for="securityNotify"
                              >
                                Security alerts
                              </label>
                            </div>
                          </div>
                        </div>

                        <div class="text-center">
                          <button type="submit" class="btn btn-primary">
                            Save Changes
                          </button>
                        </div>
                      </form>
                    </div> */}

                          <div
                            class="tab-pane fade pt-3"
                            id="profile-change-password"
                          >
                            <form>
                              <div class="row mb-3">
                                <label
                                  for="currentPassword"
                                  class="col-md-4 col-lg-3 col-form-label"
                                >
                                  Current Password
                                </label>
                                <div class="col-md-8 col-lg-9">
                                  <input
                                    name="password"
                                    type="password"
                                    class="form-control"
                                    id="currentPassword"
                                  />
                                </div>
                              </div>

                              <div class="row mb-3">
                                <label
                                  for="newPassword"
                                  class="col-md-4 col-lg-3 col-form-label"
                                >
                                  New Password
                                </label>
                                <div class="col-md-8 col-lg-9">
                                  <input
                                    name="newpassword"
                                    type="password"
                                    class="form-control"
                                    id="newPassword"
                                  />
                                </div>
                              </div>

                              <div class="row mb-3">
                                <label
                                  for="renewPassword"
                                  class="col-md-4 col-lg-3 col-form-label"
                                >
                                  Re-enter New Password
                                </label>
                                <div class="col-md-8 col-lg-9">
                                  <input
                                    name="renewpassword"
                                    type="password"
                                    class="form-control"
                                    id="renewPassword"
                                  />
                                </div>
                              </div>

                              <div class="text-center">
                                <button type="submit" class="btn btn-primary">
                                  Change Password
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
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

export default EmProfile;
