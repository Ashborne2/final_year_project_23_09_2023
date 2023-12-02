import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';


function Admin_User() {

    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({});
    
    // const navigate = useNavigate()


    const handleChange = (e) => {
        // console.log(e.target.value);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value

        })


    };


    const userdata = {
        fName: formData['firstName'],
        lName: formData['lastName'],
        dob: formData['dob'],
        email: formData['email'],
        username: formData['username'],
        password: formData['password'],
        phone: formData['phone'],
        userType: formData['userType'],
        address: formData['address'],
        nin: formData['nin'],
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        // const response = await fetch('http://localhost:5000/register', {
        //   method: 'POST',
        //   body: JSON.stringify(formData),
        //   headers: {
        //     'Content-Type': 'application/json'
        //   }
        // })
        // const data = await response.json();


        if (
            userdata.fName === undefined || userdata.fName === '' ||
            userdata.lName === undefined || userdata.lName === '' ||
            userdata.dob === undefined || userdata.dob === '' ||
            userdata.email === undefined || userdata.email === '' ||
            userdata.username === undefined || userdata.username === '' ||
            userdata.password === undefined || userdata.password === '' ||
            userdata.phone === undefined || userdata.phone === '' ||
            userdata.userType === undefined || userdata.userType === '' ||
            userdata.address === undefined || userdata.address === '' ||
            userdata.nin === undefined || userdata.nin === ''
        ) {
            toast.error("Please fill all the fields")
        } else {

            let response = await axios.post('http://localhost:5000/register', userdata)

            if (response.data['status'] === 'new user created') {
                toast.success(response.data['message'])
                setTimeout(() => {
                    // navigate('/login')
                }, 3000);

            } else if (response.data['status'] === 'user already exists') {
                toast.error(response.data['message'])
            }

        }
        // let response = await Axios.post('http://localhost:5000/register', userdata)

        // if (response.data['status'] === 'new user created') {
        //   alert('new user created')
        //   navigate('/login')
        // } else if (response.data['status'] === 'user already exists') {
        //   alert('user already exists')
        // }



    };

    useEffect(() => {     // Retrieve the token from local storage
        axios.get('http://localhost:5000/getAllUsers')
            .then(res => {
                // console.log(res.data.data)
                setData(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })


    }, []);



    return (
        <>

            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col py-3">
                        <main id="dash-main" className="dash-main">

                            <div className="pagetitle">
                                <h1>Manage Users</h1>
                            </div>

                            <section className="section">
                                <div class="col-6">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Add a new user </h5>

                                            <form class="row g-3 needs-validation" novalidate >


                                                <div class="row g-2">
                                                    <div class="col-md">
                                                        <div class="form-floating">
                                                            <input
                                                                type="text"
                                                                name="firstName"
                                                                class="form-control"
                                                                id="floatingInputGrid 1"
                                                                onChange={handleChange}
                                                                placeholder="name@example.com"

                                                            />
                                                            <label for="floatingInputGrid 1">First Name</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-md">
                                                        <div class="form-floating">
                                                            <input
                                                                type="text"
                                                                name="lastName"
                                                                class="form-control"
                                                                id="floatingInputGrid 2"
                                                                onChange={handleChange}
                                                                placeholder="name@example.com"
                                                            />
                                                            <label for="floatingInputGrid 2">Last Name</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-12">
                                                    <label class="form-label">Date of Birth :</label>

                                                    <input
                                                        id="date_picker"
                                                        name='dob'
                                                        type="date"
                                                        style=
                                                        {{
                                                            border: "#bfbec7",
                                                            color: "black",
                                                            margin: "10px",
                                                            padding: "10px",
                                                            borderRadius: "10px",
                                                            borderStyle: "solid",
                                                        }}
                                                        onChange={handleChange}

                                                    />

                                                </div>

                                                <div class="col-12">
                                                    <label for="yourEmail" class="form-label">Your Email</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        class="form-control"
                                                        id="yourEmail"
                                                        onChange={handleChange}
                                                        required />
                                                    <div class="invalid-feedback">Please enter a valid Email adddress!</div>
                                                </div>

                                                <div class="col-12">
                                                    <label for="yourUsername" class="form-label">Username</label>
                                                    <div class="input-group has-validation">

                                                        <input type="text"
                                                            name="username"
                                                            class="form-control"
                                                            id="yourUsername"
                                                            onChange={handleChange}
                                                            required />
                                                        <div class="invalid-feedback">Please choose a username.</div>
                                                    </div>
                                                </div>

                                                <div class="col-12">
                                                    <label for="yourPassword" class="form-label">Password</label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        class="form-control"
                                                        id="yourPassword"
                                                        onChange={handleChange}
                                                        required />
                                                    <div class="invalid-feedback">Please enter your password!</div>
                                                </div>

                                                <div class="form-floating">
                                                    <input
                                                        type="number"
                                                        class="form-control"
                                                        id="floatingPassword"
                                                        placeholder="Phone Number"
                                                        name='phone'
                                                        onChange={handleChange}
                                                    />
                                                    <label for="floatingPassword">Phone Number</label>
                                                </div>

                                                <select onChange={handleChange} name='userType' class="form-select" aria-label="Default select example">
                                                    <option selected>Select User</option>
                                                    <option value="Customer">Customer</option>
                                                    <option value="Agent">Agent</option>
                                                    <option value="Admin">Admin</option>
                                                </select>

                                                <div class="form-floating">
                                                    <textarea
                                                        name='address'
                                                        class="form-control"
                                                        placeholder="Leave a comment here"
                                                        id="floatingTextarea2"
                                                        onChange={handleChange}
                                                        style={{ height: '100px' }}>

                                                    </textarea>
                                                    <label for="floatingTextarea2">Address</label>
                                                </div>

                                                <div class="form-floating">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="floatingPassword 1"
                                                        placeholder='National ID Number'
                                                        name='nin'
                                                        onChange={handleChange}
                                                    />

                                                    <label for="floatingPassword 1">National ID Number</label>
                                                </div>


                                                <div class="col-12">
                                                    <div class="form-check">
                                                        <input class="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required />
                                                        <label class="form-check-label" for="acceptTerms">I agree and accept the <Link href="#">terms and conditions</Link></label>
                                                        <div class="invalid-feedback">You must agree before submitting.</div>
                                                    </div>
                                                </div>

                                                <div class="col-12">
                                                    <Link to={''}>
                                                        <button class="btn btn-primary w-100" type="submit" onClick={handleSubmit}>Create Account</button>
                                                    </Link>
                                                </div>
                                                <div class="col-12">
                                                    <p class="small mb-0">
                                                        Already have an account? <Link to={'/login'}>Log in</Link>
                                                    </p>
                                                </div>
                                            </form>


                                        </div>
                                    </div>
                                </div>
                                <div className="accordion_wrapper">

                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">User Handaling</h5>
                                            <p>Process or Edit or Add <code>Users</code> To The System</p>

                                            <table class="table table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Full Name</th>
                                                        <th scope="col">Username</th>
                                                        <th scope="col">Role</th>
                                                        <th scope="col">----</th>
                                                        <th scope="col">---</th>
                                                    </tr>
                                                </thead>
                                                <tbody>


                                                    {data.map((elementInRes, index) => (
                                                        <tr>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{elementInRes.fName} {elementInRes.lName}</td>
                                                            <td>{elementInRes.username}</td>
                                                            <td>{elementInRes.userType}</td>
                                                            <td><button type="button" class="btn btn-info"></button></td>
                                                            <td><button type="button" class="btn btn-success">Update Status</button></td>
                                                            <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#verticalycentered" + index}>
                                                                View Details
                                                            </button>
                                                                <div class="modal fade" id={"verticalycentered" + index} tabindex="-1">
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
                                                                                                        {elementInRes.username}
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

                            </section>

                        </main>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Admin_User