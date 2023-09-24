import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { getYear, range } from 'react-datepicker';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate()


  const handleChange = (e) => {
    console.log(e.target.value);

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
    let response = await Axios.post('http://localhost:5000/register', userdata)

    if (response.data['status'] === 'new user created') {
      alert('new user created')
      navigate('/login')
    } else if (response.data['status'] === 'user already exists') {
      alert('user already exists')
    }


    // console.log(userdata);


    // navigate('/login')


  };

  const [startDate, setStartDate] = useState(new Date());

  // const years = range(1990, getYear(new Date()) + 1, 1);
  // const months = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ]

  return (
    <div><main>
      <div class="container">

        <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">


                <div class="card mb-3">

                  <div class="card-body">

                    <div class="pt-4 pb-2">
                      <h5 class="card-title text-center pb-0 fs-4">Create an Account</h5>
                      <p class="text-center small">Enter your personal details to create account</p>
                    </div>

                    <form class="row g-3 needs-validation" novalidate >


                      <div class="row g-2">
                        <div class="col-md">
                          <div class="form-floating">
                            <input
                              type="text"
                              name="firstName"
                              class="form-control"
                              id="floatingInputGrid"
                              onChange={handleChange}
                              placeholder="name@example.com"
                            />
                            <label for="floatingInputGrid">First Name</label>
                          </div>
                        </div>

                        <div class="col-md">
                          <div class="form-floating">
                            <input
                              type="text"
                              name="lastName"
                              class="form-control"
                              id="floatingInputGrid"
                              onChange={handleChange}
                              placeholder="name@example.com"
                            />
                            <label for="floatingInputGrid">Last Name</label>
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <label class="form-label">Date of Birth :</label>

                        {/* <ReactDatePicker
                          name='dob'
                          selected={startDate}
                          onChange={(date) =>
                          setStartDate(date)}
                          dateFormat='dd/MM/yyyy'
                          style={{
                            border: "#bfbec7",
                            color: "black",
                            margin: "15px",
                            padding: "20px",
                            borderRadius: "10px",
                            borderStyle: "solid",
                          }}

                        /> */}
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
                        <option value="Employee">Employee</option>
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
                          id="floatingPassword"
                          placeholder='National ID Number'
                          name='nin'
                          onChange={handleChange}
                        />
                        <label for="floatingPassword">National ID Number</label>
                      </div>


                      <div class="col-12">
                        <div class="form-check">
                          <input class="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required />
                          <label class="form-check-label" for="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
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
            </div>
          </div>

        </section>

      </div>

    </main>
    </div>
  )
}

export default Register