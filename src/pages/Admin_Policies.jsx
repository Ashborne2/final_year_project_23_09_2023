import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Axios from 'axios';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';

function Admin_Policies() {
    const [PFormData, setFormData] = useState({});
    const [file, setFile] = useState([]);
    const [data, setData] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios.get('http://localhost:5000/getpolicy');
            console.log(result.data.data);
            setData(result.data.data);
        };
        fetchData();

    }, []);


    const handleChange = (e) => {
        console.log(e.target.value);
        setFormData({
            ...PFormData,
            [e.target.name]: e.target.value
        })
    };

    const onFileChange = (e) => {
        setFile(e.target.files[0])
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('file', file);
        formData.append('policydata', JSON.stringify(PFormData));

        let Response = await Axios.post('http://localhost:5000/policy', formData);

        if (Response.data['status'] === 'failed') {
            toast.error(Response.data['message'])
        } else if (Response.data['status'] === 'success') {
            toast.success(Response.data['message'])
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }

        // console.log(FormData);
    };

    const handleDelete = async (item) => {
        // e.preventDefault();
        console.log(item._id);

        let Response = await Axios.post('http://localhost:5000/delete/' + item._id);

        if (Response.data['status'] === 'failed') {
            toast.error(Response.data['message'])
        } else if (Response.data['status'] === 'success') {
            toast.success(Response.data['message'])
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }

        // console.log(FormData);
    };

    const handleEdit = async (item) => {

        // let formData = new FormData();
        // formData.append('file', file);
        // formData.append('policydata', JSON.stringify(PFormData));
        
        console.log(item._id);
        console.log(PFormData);

        let Response = await Axios.post('http://localhost:5000/edit/' + item._id, PFormData);

        // if (Response.data['status'] === 'failed') {
        //     toast.error(Response.data['message'])
        // } else if (Response.data['status'] === 'success') {
        //     toast.success(Response.data['message'])
        //     // setTimeout(() => {
        //     //     window.location.reload();
        //     // }, 3000);
        // }

        // console.log(FormData);
    };
    


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
                                <Link to={"#"} className="d-flex align-items-center text-white text-decoration-none dropdown-toggle">
                                    {/* <img src={''} alt="my profile image" width="30" height="30" className="rounded-circle" /> */}
                                    <span className="d-none d-sm-inline mx-1">My profile</span>
                                </Link>
                                {/* <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                    <li><Link className="dropdown-item" to={'#'}>New project...</Link></li>
                                    <li><Link className="dropdown-item" to={'#'}>Settings</Link></li>
                                    <li><Link className="dropdown-item" to={'#'}>Profile</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><Link className="dropdown-item" to={'#'}>Sign out</Link></li>
                                </ul> */}
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
                                                <h5 class="card-title">Add New Insurance Coverage Service</h5>


                                                <form class="row g-3" method="post" enctype="multipart/form-data">
                                                    <div class="col-md-12">
                                                        <div class="form-floating">
                                                            <input onChange={handleChange} name="Coverage" type="text" class="form-control" id="floatingName" placeholder="Coverage Name" />
                                                            <label for="floatingName">Coverage Name</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-12">
                                                        <div class="form-floating">
                                                            <textarea onChange={handleChange} name='description' class="form-control" placeholder="Description of the coverage" id="floatingTextarea" style={{ height: "100px" }}></textarea>
                                                            <label for="floatingTextarea">Description of the coverage</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="col-md-12">
                                                            <div class="form-floating">
                                                                <input onChange={handleChange} name='Price' type="text" class="form-control" id="floatingCity" placeholder="Pricing" data-bs-toggle="tooltip" data-bs-placement="left" title="The pricing is in $" />
                                                                <label for="floatingCity">Price</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-floating mb-3">
                                                            <select onChange={handleChange} name='Duration' class="form-select" id="floatingSelect" aria-label="Duration">
                                                                <option selected>Select a Duration</option>
                                                                <option value="1 year">1 year</option>
                                                                <option value="2 years">2 years</option>
                                                                <option value="5 years">5 years</option>
                                                                <option value="10 years">10 years</option>
                                                                <option value="Lifetime">Lifetime</option>
                                                            </select>
                                                            <label for="floatingSelect">Duration</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">

                                                        <div class="mb-3">
                                                            <label for="formFile" class="form-label">Insert Logo</label>
                                                            <input onChange={onFileChange} class="form-control" type="file" id="formFile" />
                                                        </div>


                                                    </div>
                                                    <div class="text-center">
                                                        <button onClick={handleSubmit} type="submit" class="btn btn-primary">Submit</button>
                                                        {/* <button type="reset" class="btn btn-secondary">Reset</button> */}
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
                                <div class="row">
                                    <div class="col">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">Current Policies</h5>


                                                <table class="table table-dark">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Coverage Name</th>
                                                            <th scope="col">Description</th>
                                                            <th scope="col">Duration</th>
                                                            <th scope="col">Price</th>
                                                            <th scope="col">Image</th>
                                                            <th scope="col">Action</th>
                                                            <th scope="col">--</th>

                                                        </tr>
                                                    </thead>
                                                    {data.map((item, index) => (
                                                        <tbody>
                                                            <tr key={index}>
                                                                <th scope="row" style={{ width: "50px" }}>{item._id}</th>
                                                                <td style={{ width: "100px" }}>{item.Coverage}</td>
                                                                <td style={{ width: "100px" }}>{item.description}</td>
                                                                <td style={{ width: "100px" }}>{item.Duration}</td>
                                                                <td style={{ width: "100px" }}>${item.Price}</td>
                                                                <td style={{ width: "100px", height: "100px" }}><img src={item.file} alt="" style={{ width: '100px', height: '100px' }} /></td>


                                                                <td style={{ width: "100px" }}><button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target={"#verticalycentered" + index}>
                                                                    Delete
                                                                </button>
                                                                    <div class="modal fade" id={"verticalycentered" + index} tabindex="-1">
                                                                        <div class="modal-dialog modal-dialog-centered">
                                                                            <div class="modal-content">
                                                                                <div class="modal-header" style={{ backgroundColor: "#dc3545" }}>
                                                                                    <h5 class="modal-title">Delete Item</h5>
                                                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                                </div>
                                                                                <div class="modal-body" key={index} style={{ backgroundColor: "grey" }}>
                                                                                    Are you sure you want to delete this record?
                                                                                </div>
                                                                                <div class="modal-footer">
                                                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                                                    <button type="button" class="btn btn-danger" onClick={() => handleDelete(item)}>Yes</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div></td>

                                                                <td style={{ width: "100px" }}><button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target={"#largeModal" + index}>
                                                                    Edit
                                                                </button>
                                                                    <div class="modal fade" id={"largeModal" + index} tabindex="-1">
                                                                        <div class="modal-dialog modal-lg">
                                                                            <div class="modal-content">
                                                                                <div class="modal-header" style={{ backgroundColor: "#ffc107" }}>
                                                                                    <h5 class="modal-title">Edit Record</h5>
                                                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                                </div>
                                                                                <div class="modal-body" key={index} style={{ backgroundColor: "grey" }}>

                                                                                    <div class="col">
                                                                                        <div class="card">
                                                                                            <div class="card-body">
                                                                                                <h5 class="card-title">Add New Insurance Coverage Service</h5>


                                                                                                <form class="row g-3" method="post" enctype="multipart/form-data">
                                                                                                    <div class="col-md-12">
                                                                                                        <div class="form-floating">
                                                                                                            <input onChange={handleChange} name="Coverage" type="text" class="form-control" id="floatingName" placeholder={item.Coverage} />
                                                                                                            <label for="floatingName">Coverage Name</label>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div class="col-12">
                                                                                                        <div class="form-floating">
                                                                                                            <textarea onChange={handleChange} name='description' class="form-control" placeholder="Description of the coverage" id="floatingTextarea" style={{ height: "100px" }}></textarea>
                                                                                                            <label for="floatingTextarea">Description of the coverage</label>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="col-md-6">
                                                                                                        <div class="col-md-12">
                                                                                                            <div class="form-floating">
                                                                                                                <input onChange={handleChange} name='Price' type="text" class="form-control" id="floatingCity" placeholder="Pricing" data-bs-toggle="tooltip" data-bs-placement="left" title="The pricing is in $" />
                                                                                                                <label for="floatingCity">Price</label>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="col-md-6">
                                                                                                        <div class="form-floating mb-3">
                                                                                                            <select onChange={handleChange} name='Duration' class="form-select" id="floatingSelect" aria-label="Duration">
                                                                                                                <option selected>Select a Duration</option>
                                                                                                                <option value="1 year">1 year</option>
                                                                                                                <option value="2 years">2 years</option>
                                                                                                                <option value="5 years">5 years</option>
                                                                                                                <option value="10 years">10 years</option>
                                                                                                                <option value="Lifetime">Lifetime</option>
                                                                                                            </select>
                                                                                                            <label for="floatingSelect">Duration</label>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="col-12">

                                                                                                        <div class="mb-3">
                                                                                                            <label for="formFile" class="form-label">Insert Logo</label>
                                                                                                            <input onChange={onFileChange} class="form-control" type="file" id="formFile" />
                                                                                                        </div>


                                                                                                    </div>
                                                                                                    {/* <div class="text-center">
                                                                                                        <button onClick={() => handleEdit(item)} class="btn btn-primary">Submit</button>
                                                                                                        
                                                                                                    </div> */}
                                                                                                </form>

                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                                <div class="modal-footer">
                                                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                                                    <button type="button" class="btn btn-danger" onClick={() => handleEdit(item)}>Yes</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div></td>
                                                            </tr>

                                                        </tbody>
                                                    )
                                                    )}

                                                </table>


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

export default Admin_Policies
