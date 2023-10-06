import React from 'react'
import "../dash-asset/css/dashboard.css";
import { Link } from 'react-router-dom'

function Admin_Claim() {
    return (
        <>
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
                                        <i class="fs-4 bi-speedometer2"></i>
                                        <span class="ms-1 d-none d-sm-inline">My Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/admin/emprofile'} data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-speedometer2"></i>
                                        <span class="ms-1 d-none d-sm-inline">Claim Settled</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/admin/admin_claim'} class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-table"></i>
                                        <span class="ms-1 d-none d-sm-inline">Manage Claims</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'#'} data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                                        <i class="fs-4 bi-bootstrap"></i>
                                        <span class="ms-1 d-none d-sm-inline">Bootstrap</span>
                                    </Link>

                                </li>
                                <li>
                                    <Link to={'#'} data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-grid"></i>
                                        <span class="ms-1 d-none d-sm-inline">Policies</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'#'} class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-people"></i>
                                        <span class="ms-1 d-none d-sm-inline">Messages</span>
                                    </Link>
                                </li>
                            </ul>
                            <hr />
                            <div class="dropdown pb-5">
                                <Link to={"#"} class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={''} alt="my profile image" width="30" height="30" class="rounded-circle" />
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
                                <h1>Manage your claims</h1>
                            </div>

                            <section class="section">
                                <div class="accordion_wrapper">
                                    <div class="accordion" id="accordionPanelsStayOpenExample">
                                        <div class="accordion-item accordion_design">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                    <div className='normal_padding'>
                                                        Claim ID
                                                    </div>
                                                    <div class="vr"></div>
                                                    <div className='normal_padding'>
                                                        user name
                                                    </div>
                                                    <div className='normal_padding thin_text'>
                                                        Submitted: 12-23-22 14:00 pm
                                                    </div>
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                                <div class="accordion-body">

                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">First Notice of Loss</h5>
                                                                    <div class="row">
                                                                        <div class="col-4 text-center">
                                                                            <strong>
                                                                                Username
                                                                            </strong>
                                                                        </div>
                                                                        <div class="col-8">
                                                                            name from db
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-4 text-center">
                                                                            <strong>
                                                                                User Id
                                                                            </strong>
                                                                        </div>
                                                                        <div class="col-8">
                                                                            id from db
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-4 text-center">
                                                                            <strong>
                                                                                Type of Loss
                                                                            </strong>
                                                                        </div>
                                                                        <div class="col-8">
                                                                            type from db
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-4 text-center">
                                                                            <strong>
                                                                                Date Notified
                                                                            </strong>
                                                                        </div>
                                                                        <div class="col-8">
                                                                            name from db
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div class="col-lg-6">

                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Address of Loss</h5>
                                                                    <div class="row">
                                                                        <div class="col-4 text-center">
                                                                            <strong>
                                                                                Location Type
                                                                            </strong>
                                                                        </div>
                                                                        <div class="col-8">
                                                                            street
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-4 text-center">
                                                                            <strong>
                                                                                Address 1
                                                                            </strong>
                                                                        </div>
                                                                        <div class="col-8">
                                                                            address from db
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-4 text-center">
                                                                            <strong>
                                                                                Address 2
                                                                            </strong>
                                                                        </div>
                                                                        <div class="col-8">
                                                                            address from db
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-4 text-center">
                                                                            <strong>
                                                                                City
                                                                            </strong>
                                                                        </div>
                                                                        <div class="col-8">
                                                                            name from db
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Additional Evidence</h5>
                                                                    {/* <image src={'https://images.pexels.com/photos/163016/crash-test-collision-60-km-h-distraction-163016.jpeg'} alt="image" /> */}
                                                                    <img src="https://images.pexels.com/photos/163016/crash-test-collision-60-km-h-distraction-163016.jpeg" alt="" style={{ width: '300px', height: '300px' }} />
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item accordion_design">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                    Accordion Item #2
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                                <div class="accordion-body">
                                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item accordion_design">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                    Accordion Item #3
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                                <div class="accordion-body">
                                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-6">

                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">First Notice of Loss</h5>

                                                <div class="row">
                                                    <div class="col-4 text-center">
                                                        <strong>
                                                            Username
                                                        </strong>
                                                    </div>
                                                    <div class="col-8">
                                                        name from db
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-4 text-center">
                                                        <strong>
                                                            User Id
                                                        </strong>
                                                    </div>
                                                    <div class="col-8">
                                                        id from db
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-4 text-center">
                                                        <strong>
                                                            Type of Loss
                                                        </strong>
                                                    </div>
                                                    <div class="col-8">
                                                        type from db
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-4 text-center">
                                                        <strong>
                                                            Date Notified
                                                        </strong>
                                                    </div>
                                                    <div class="col-8">
                                                        name from db
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-lg-6">

                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">Example Card</h5>
                                                <p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
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
    )
}

export default Admin_Claim