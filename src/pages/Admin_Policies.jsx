import React from 'react'
import { Link } from 'react-router-dom'

function Admin_Policies() {
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
                                        <i className="fs-4 bi-house"></i>
                                        <span className="ms-1 d-none d-sm-inline">
                                            Dashboard
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/admin/emprofile'} data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-speedometer2"></i>
                                        <span className="ms-1 d-none d-sm-inline">My Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/admin/emprofile'} className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-speedometer2"></i>
                                        <span className="ms-1 d-none d-sm-inline">Claim Settled</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/admin/admin_claim'} className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-table"></i>
                                        <span className="ms-1 d-none d-sm-inline">Manage Claims</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to={'/admin/admin_policy'} className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-grid"></i>
                                        <span className="ms-1 d-none d-sm-inline">Policies</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to={'#'} className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-people"></i>
                                        <span className="ms-1 d-none d-sm-inline">Messages</span>
                                    </Link>
                                </li>
                            </ul>
                            <hr />
                            <div className="dropdown pb-5">
                                <Link to={"#"} className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={''} alt="my profile image" width="30" height="30" className="rounded-circle" />
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

                            <div className="pagetitle">
                                <h1>Policy management</h1>
                            </div>

                            <section className="section">

                                <div class="row">
                                    <div class="col">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">Floating labels Form</h5>


                                                <form class="row g-3">
                                                    <div class="col-md-12">
                                                        <div class="form-floating">
                                                            <input type="text" class="form-control" id="floatingName" placeholder="Your Name" />
                                                            <label for="floatingName">Your Name</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-floating">
                                                            <input type="email" class="form-control" id="floatingEmail" placeholder="Your Email" />
                                                            <label for="floatingEmail">Your Email</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-floating">
                                                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                                            <label for="floatingPassword">Password</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-floating">
                                                            <textarea class="form-control" placeholder="Address" id="floatingTextarea" style={{ height: "100px" }}></textarea>
                                                            <label for="floatingTextarea">Address</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="col-md-12">
                                                            <div class="form-floating">
                                                                <input type="text" class="form-control" id="floatingCity" placeholder="City" />
                                                                <label for="floatingCity">City</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-floating mb-3">
                                                            <select class="form-select" id="floatingSelect" aria-label="State">
                                                                <option selected>New York</option>
                                                                <option value="1">Oregon</option>
                                                                <option value="2">DC</option>
                                                            </select>
                                                            <label for="floatingSelect">State</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-2">
                                                        <div class="form-floating">
                                                            <input type="text" class="form-control" id="floatingZip" placeholder="Zip" />
                                                            <label for="floatingZip">Zip</label>
                                                        </div>
                                                    </div>
                                                    <div class="text-center">
                                                        <button type="submit" class="btn btn-primary">Submit</button>
                                                        <button type="reset" class="btn btn-secondary">Reset</button>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h4>Policy guidance</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusantium eligendi dolorem doloribus placeat nobis. At error, dolor corporis placeat dolorem tempora provident, exercitationem sint voluptatem iusto suscipit ipsum nemo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut animi voluptatum obcaecati, omnis modi deleniti dolor consectetur autem rem consequuntur eligendi dolore dolorum distinctio est,<br></br>
                                            <ul>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum qui, dolor iusto nulla porro ratione doloremque quisquam voluptatibus praesentium veniam repudiandae, debitis voluptates corrupti voluptatum, a eum explicabo perferendis pariatur.</li>
                                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ipsam veritatis inventore saepe explicabo sit animi ratione ab dolores. Ut nisi consectetur nesciunt voluptates perferendis debitis numquam sed culpa esse.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illum unde eaque debitis repudiandae tempore aperiam pariatur adipisci est culpa! Atque magni animi voluptatibus totam nobis quidem dolore molestiae minima.</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>


                            </section>

                        </main>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Admin_Policies
