import React from 'react'
import "../dash-asset/css/dashboard.css";
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';

function Admin_Claim() {
    // let loop = [
    //     {
    //         "name": "ryan"
    //     },
    //     {
    //         "name": "ABCD"
    //     }
    // ]

    const [data, setData] = useState([])
    


    

    useEffect(() => {

        // fetch("http://localhost:3000/claim")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             // setData(result)
        //             console.log(result)
        //         },
        //         (error) => {
        //             console.log(error)
        //         }
        //     )
        axios.get('http://localhost:5000/adminClaim')
            .then(res => {
                console.log(res.data.data)
                setData(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


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

                            <div className="pagetitle">
                                <h1>Manage your claims</h1>
                            </div>

                            <section className="section">
                                <div className="accordion_wrapper">
                                    {/* <div className="accordion" id="accordionPanelsStayOpenExample">



                                        {data.map((elementInRes, index) => (
                                            <div className="accordion-item accordion_design" key={index}>
                                                <h2 className="accordion-header" id={"panelsStayOpen-headingOne" + index}>


                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#panelsStayOpen-collapseOne" + index} aria-expanded="false" aria-controls={"panelsStayOpen-collapseOne" + index}>
                                                        <div className='normal_padding'>
                                                            Claim ID : {elementInRes._id}
                                                        </div>
                                                        <div className="vr"></div>
                                                        <div className='normal_padding'>
                                                            user name : {elementInRes.user_name}
                                                        </div>
                                                        <div className='normal_padding thin_text'>
                                                            Submitted: {elementInRes.submitted_time}
                                                        </div>
                                                        <div>

                                                            <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                Update Progress Status
                                                            </button>
                                                            <ul class="dropdown-menu">
                                                                <li><a class="dropdown-item" href="#">Processing</a></li>
                                                                <li><a class="dropdown-item" href="#">On Hold</a></li>
                                                                <li><a class="dropdown-item" href="#">Evidence verification</a></li>
                                                                <li><a class="dropdown-item" href="#">Finalising</a></li>
                                                                <li><hr class="dropdown-divider" /></li>
                                                                <li><a class="dropdown-item" href="#">Review Done</a></li>
                                                                <li><a class="dropdown-item" href="#">Claim Settled</a></li>
                                                            </ul>

                                                        </div>
                                                    </button>




                                                </h2>
                                                <div id={"panelsStayOpen-collapseOne" + index} className="accordion-collapse collapse " aria-labelledby={"panelsStayOpen-headingOne" + index}>
                                                    <div className="accordion-body">

                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="card">
                                                                    <div className="card-body">
                                                                        <h5 className="card-title">First Notice of Loss</h5>
                                                                        <div className="row">
                                                                            <div className="col-4 text-center">
                                                                                <strong>
                                                                                    Username
                                                                                </strong>
                                                                            </div>
                                                                            <div className="col-8">
                                                                                name from db
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-4 text-center">
                                                                                <strong>
                                                                                    User Id
                                                                                </strong>
                                                                            </div>
                                                                            <div className="col-8">
                                                                                id from db
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-4 text-center">
                                                                                <strong>
                                                                                    Type of Loss
                                                                                </strong>
                                                                            </div>
                                                                            <div className="col-8">
                                                                                type from db
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-4 text-center">
                                                                                <strong>
                                                                                    Date Notified
                                                                                </strong>
                                                                            </div>
                                                                            <div className="col-8">
                                                                                name from db
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                            <div className="col-lg-6">

                                                                <div className="card">
                                                                    <div className="card-body">
                                                                        <h5 className="card-title">Address of Loss</h5>
                                                                        <div className="row">
                                                                            <div className="col-4 text-center">
                                                                                <strong>
                                                                                    Location Type
                                                                                </strong>
                                                                            </div>
                                                                            <div className="col-8">
                                                                                street
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-4 text-center">
                                                                                <strong>
                                                                                    Address 1
                                                                                </strong>
                                                                            </div>
                                                                            <div className="col-8">
                                                                                address from db
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-4 text-center">
                                                                                <strong>
                                                                                    Address 2
                                                                                </strong>
                                                                            </div>
                                                                            <div className="col-8">
                                                                                address from db
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-4 text-center">
                                                                                <strong>
                                                                                    City
                                                                                </strong>
                                                                            </div>
                                                                            <div className="col-8">
                                                                                name from db
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="card">
                                                                    <div className="card-body">
                                                                        <h5 className="card-title">Additional Evidence</h5>
                                                                      
                                                                        <img src="https://images.pexels.com/photos/163016/crash-test-collision-60-km-h-distraction-163016.jpeg" alt="" style={{ width: '300px', height: '300px' }} />
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        )
                                        )}









                                    </div> */}



                                    {/* 
                                    <div class="card mb-3">
                                        <div class="row g-0">
                                            <div class="col-md-3">
                                                <img src="https://images.pexels.com/photos/15901955/pexels-photo-15901955/free-photo-of-a-man-standing-in-front-of-a-green-mountain.jpeg" class="img-fluid rounded-start" alt="..." style={{width:"300px",height:"230px"}} />
                                            </div>
                                            <div class="col-md-6">
                                                <div class="card-body">
                                                    <h5 class="card-title">Card with an image on left</h5>
                                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Claim Processing</h5>
                                            <p>Process or Edit the <code>Claims</code> for Insured property</p>

                                            <table class="table table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Claim ID</th>
                                                        <th scope="col">User Name</th>
                                                        <th scope="col">Submitted Time</th>
                                                        <th scope="col">Action</th>
                                                        <th scope="col">---</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.map((elementInRes, index) => (
                                                        <tr>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{elementInRes._id}</td>
                                                            <td>{elementInRes.username}</td>
                                                            <td>{elementInRes.submitted_time}</td>
                                                            <td><button type="button" class="btn btn-danger">Delete</button></td>
                                                            <td><button type="button" class="btn btn-success">Update</button></td>
                                                            <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#verticalycentered"+index}>
                                                                View Details
                                                            </button>
                                                                <div class="modal fade" id={"verticalycentered"+index} tabindex="-1">
                                                                    <div class="modal-dialog modal-xl modal-dialog-centered">
                                                                        <div class="modal-content">
                                                                            <div class="modal-header">
                                                                                <h5 class="modal-title">Claim Details</h5>
                                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                            </div>
                                                                            <div class="modal-body" key={index}>
                                                                                <div className="row">
                                                                                    <div className="col-lg-6">
                                                                                        <div className="card">
                                                                                            <div className="card-body">
                                                                                                <h5 className="card-title">First Notice of Loss</h5>
                                                                                                <div className="row">
                                                                                                    <div className="col-4 text-center">
                                                                                                        <strong>
                                                                                                            Username
                                                                                                        </strong>
                                                                                                    </div>
                                                                                                    <div className="col-8">
                                                                                                        {elementInRes.username}
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="row">
                                                                                                    <div className="col-4 text-center">
                                                                                                        <strong>
                                                                                                            User Id
                                                                                                        </strong>
                                                                                                    </div>
                                                                                                    <div className="col-8">
                                                                                                        {elementInRes.user_id}
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="row">
                                                                                                    <div className="col-4 text-center">
                                                                                                        <strong>
                                                                                                            Coverage Type
                                                                                                        </strong>
                                                                                                    </div>
                                                                                                    <div className="col-8">
                                                                                                        {elementInRes.damage_coverage}
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="row">
                                                                                                    <div className="col-4 text-center">
                                                                                                        <strong>
                                                                                                            Date Notified
                                                                                                        </strong>
                                                                                                    </div>
                                                                                                    <div className="col-8">
                                                                                                        {elementInRes.submitted_time}
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>

                                                                                    <div className="col-lg-6">

                                                                                        <div className="card">
                                                                                            <div className="card-body">
                                                                                                <h5 className="card-title">Address of Loss</h5>
                                                                                                <div className="row">
                                                                                                    <div className="col-4 text-center">
                                                                                                        <strong>
                                                                                                            Location Type
                                                                                                        </strong>
                                                                                                    </div>
                                                                                                    <div className="col-8">
                                                                                                        street
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="row">
                                                                                                    <div className="col-4 text-center">
                                                                                                        <strong>
                                                                                                            Address 1
                                                                                                        </strong>
                                                                                                    </div>
                                                                                                    <div className="col-8">
                                                                                                    {elementInRes.location}
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="row">
                                                                                                    <div className="col-4 text-center">
                                                                                                        <strong>
                                                                                                            Address 2
                                                                                                        </strong>
                                                                                                    </div>
                                                                                                    <div className="col-8">
                                                                                                        address from db
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="row">
                                                                                                    <div className="col-4 text-center">
                                                                                                        <strong>
                                                                                                            City
                                                                                                        </strong>
                                                                                                    </div>
                                                                                                    <div className="col-8">
                                                                                                        {elementInRes.description}
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col">
                                                                                        <div className="card">
                                                                                            <div className="card-body">
                                                                                                <h5 className="card-title">Additional Evidence</h5>
                                                                                                {/* <image src={'https://images.pexels.com/photos/163016/crash-test-collision-60-km-h-distraction-163016.jpeg'} alt="image" /> */}
                                                                                                <img src={elementInRes.file} alt="" style={{ width: '300px', height: '300px' }} />
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                            <div class="modal-footer">
                                                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                                <button type="button" class="btn btn-primary">Save changes</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div></td>
                                                        </tr>
                                                    ))}


                                                </tbody>
                                            </table>


                                        </div>
                                    </div>


                                </div>

                                {/* <div className="row">
                                    <div className="col-lg-6">

                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">First Notice of Loss</h5>

                                                <div className="row">
                                                    <div className="col-4 text-center">
                                                        <strong>
                                                            Username
                                                        </strong>
                                                    </div>
                                                    <div className="col-8">
                                                        name from db
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4 text-center">
                                                        <strong>
                                                            User Id
                                                        </strong>
                                                    </div>
                                                    <div className="col-8">
                                                        id from db
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4 text-center">
                                                        <strong>
                                                            Type of Loss
                                                        </strong>
                                                    </div>
                                                    <div className="col-8">
                                                        type from db
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4 text-center">
                                                        <strong>
                                                            Date Notified
                                                        </strong>
                                                    </div>
                                                    <div className="col-8">
                                                        name from db
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-6">

                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Example Card</h5>
                                                <p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
                                            </div>
                                        </div>

                                    </div>
                                </div> */}
                            </section>

                        </main>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Admin_Claim