import React from "react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Axios from 'axios'
import toast from "react-hot-toast";


function Claim() {
  const [claimFormData, setFormData] = useState({});
  const [data, setData] = useState([])
  const [file, setFile] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));


  // validation

  // on init state
  useEffect(() => {

    Axios.get('http://localhost:5000/prClaims/' + user._id)

      .then(res => {
        let userdata = Object.values(res.data.data)
        console.log(userdata)
        setData(userdata)
      })
      .catch(err => {
        console.log(err)
      })

  }, []);


  const claimdata = {
    "user_id": user._id,
    "username": user.username,
    "broker_name": claimFormData.name,
    "insurance_id": claimFormData.Insurance_ID,
    "policy_code": claimFormData.Policy_Code,
    "damage_coverage": claimFormData.damage_coverage,
    "location": claimFormData.Location,
    "date_time": claimFormData.date_time,
    "description": claimFormData.description,
  }

  const handleChange = (e) => {

    setFormData({
      ...claimFormData,
      [e.target.name]: e.target.value
    })
  };

  const onFileChange = (e) => {
    setFile(e.target.files[0])
  };


  // submit the claim 
  const handleSubmit = async (e) => {
    e.preventDefault();


    const validateForm = () => {
      let isValid = true;

      // Check if any input field is empty
      if (
        !claimFormData.name ||
        !claimFormData.Insurance_ID ||
        !claimFormData.Policy_Code ||
        !claimFormData.damage_coverage ||
        !claimFormData.Location ||
        !claimFormData.date_time ||
        !claimFormData.description
      ) {
        isValid = false;
        toast.error("Please fill in all the required fields.");
      }

      return isValid;
    };


    
    try {(validateForm())
      let formData = new FormData();

      formData.append('file', file);
      formData.append('claimdata', JSON.stringify(claimdata));

      let Response = await Axios.post('http://localhost:5000/claim', formData);
      if (Response.data['status'] === 'failed') {
        toast.error(Response.data['message'])

      } else if (Response.data['status'] === 'success') {
        toast.success(Response.data['message'])
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }

      console.log(Response.data.data);

    } catch (error) {
      console.log(error)
    }

    // let formData = new FormData();

    // formData.append('file', file);
    // formData.append('claimdata', JSON.stringify(claimdata));

    // let Response = await Axios.post('http://localhost:5000/claim', formData);  
    // if (Response.data['status'] === 'failed') {
    //   toast.error(Response.data['message'])

    // } else if (Response.data['status'] === 'success') {
    //   toast.success(Response.data['message'])
    //   setTimeout(() => {
    //     window.location.reload();
    //   }, 3000);
    // }

    // console.log(Response.data.data);
  };








  return (
    <main id="main">
      <section id="" className="extraroom">

        <div className="row">
          <div className="col-6">
            <div className="container">
              <header className="header">
                <h1 id="title" className="text-center ">
                  Claim Form
                </h1>
                <p id="description" className="text-center">
                  Please input all the information to claim your insurance
                </p>
              </header>
              <div className="form-wrap">
                <form id="survey-form" method="post" enctype="multipart/form-data">

                  <h3 className="card-title">Basic Information</h3>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label id="name-label" for="name">
                          Broker Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label id="email-label" for="email">
                          Insurance ID
                        </label>
                        <input
                          type="text"
                          name="Insurance_ID"
                          id="email"
                          className="form-control"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label id="Insurance-label" for="Insurance">
                          Policy Code
                        </label>
                        <input
                          type="text"
                          name="Policy_Code"
                          id="Insurance"
                          className="form-control"
                          placeholder="Insurance ID"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Type of damage coverage</label>
                        <select
                          id="dropdown"
                          name="damage_coverage"
                          className="form-control"
                          required
                          onChange={handleChange}
                        >
                          <option disabled selected value>
                            Select
                          </option>
                          <option value="full coverage">full coverage</option>
                          <option value="Partial coverage">Partial coverage</option>
                          <option value="No coverage">No coverage (Just to inform)</option>

                        </select>
                      </div>
                    </div>
                  </div>

                  <h3 className="card-title">Location and time of loss</h3>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label id="Insurance-label" for="Insurance">
                          Location
                        </label>
                        <input
                          type="text"
                          name="Location"
                          id="Insurance"
                          className="form-control"
                          placeholder="Insurance ID"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Date and Time</label>
                        <input
                          type="datetime-local"
                          name="date_time"
                          max={Date.now}
                          style=
                          {{
                            border: "#bfbec7",
                            color: "black",
                            padding: "10px",
                            borderRadius: "10px",
                            borderStyle: "solid",
                          }}
                          onChange={handleChange}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Describe your situation here</label>
                        <textarea
                          id="comments"
                          className="form-control"
                          name="description"
                          placeholder="Describe your issue here..."
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <h3 className="card-title">Additional Evidence</h3>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        {/* <label>Upload your documents</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" /> */}
                        <label>Please enter any relevent evidence that might describe the damage or the situation. <strong>It could be an image or images or videos</strong> .</label>
                        <div>
                          <div className="mb-4 d-flex justify-content-left">

                            <img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
                              alt="example placeholder" style={{ width: "300px" }} />
                          </div>
                          <div className="d-flex justify-content-left">
                            <div className="btn btn-primary btn-rounded">
                              <label className="form-label text-white m-1" for="customFile1">Choose file</label>
                              <input onChange={onFileChange} type="file" name="file" className="form-control d-none" id="customFile1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <button
                        type="submit"
                        id="submit"
                        className="btn btn-primary btn-block"
                        onClick={handleSubmit}
                      >
                        Submit Your Claim
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="row gy-4"></div>
            </div>

          </div>
          <div className="col-6">
            <h4 className="text-center">Your previous claims</h4>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae harum praesentium excepturi. Voluptate tempora repellendus ipsum repudiandae ullam illo possimus tenetur veniam eaque, debitis aspernatur neque at dolor, reprehenderit quis?</p>

            <section className="section">
              <div className="accordion_wrapper">
                <div className="accordion" id="accordionPanelsStayOpenExample">



                  {data.map((elementInRes, index) =>
                  (
                    <div className="accordion-item accordion_design" key={index}>
                      <h2 className="accordion-header" id={"panelsStayOpen-headingOne" + index}>


                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#panelsStayOpen-collapseOne" + index} aria-expanded="false" aria-controls={"panelsStayOpen-collapseOne" + index}>
                          <div className='normal_padding'>
                            <strong>Claim ID :</strong> {elementInRes._id}
                          </div>
                          <div className="vr"></div>
                          <div className='normal_padding'>
                            <strong>User :</strong>  {user.username}
                          </div>
                          <div className='normal_padding thin_text'>
                            <strong>Submitted :</strong> {elementInRes.submitted_time}
                          </div>

                          <div>

                            <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                              Action
                            </button>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="#">Action</a></li>
                              <li><a class="dropdown-item" href="#">Another action</a></li>
                              <li><a class="dropdown-item" href="#">Something else here</a></li>
                              <li><hr class="dropdown-divider" /></li>
                              <li><a class="dropdown-item" href="#">Separated link</a></li>
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
                                  <h5 className="card-title text-center">First Notice of Loss</h5>
                                  <div className="row">
                                    <div className="col-4 text-center">
                                      <strong>
                                        Username
                                      </strong>
                                    </div>
                                    <div className="col-8">
                                      {user.username}
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
                                        Loss coverage
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
                                  <h5 className="card-title text-center">Address of Loss</h5>
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
                                  <h5 className="card-title text-center">Description of the damage</h5>
                                  {elementInRes.description}
                                </div>
                              </div>
                            </div>


                            <div className="col">
                              <div className="card">
                                <div className="card-body">
                                  <h5 className="card-title text-center">Additional Evidence</h5>

                                  <img src={elementInRes.file} alt="" style={{ width: '300px', height: '300px' }} />
                                </div>
                              </div>

                            </div>


                            {/* <div class="btn-group">
                              <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Action
                              </button>
                              <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                              </ul>
                            </div> */}

                          </div>

                        </div>
                      </div>
                    </div>
                  )
                  )}









                </div>
              </div>


            </section>


          </div>
        </div>
      </section>


    </main>
  );
}

// const Claim = () => {

//   const [claimFormData, setFormData] = useState({});

//   const user = JSON.parse(localStorage.getItem('user'));

//   const handleChange = (e) => {
//     console.log(e.target.value);
//     setFormData({
//       ...claimFormData,
//       [e.target.name]: e.target.value
//     })
//   };

//   const claimdata = {
//     "user_id": user._id,
//     "broker_name": claimFormData.name,
//     "insurance_id": claimFormData.Insurance_ID,
//     "policy_code": claimFormData.Policy_Code,
//     "damage_coverage": claimFormData.damage_coverage,
//     "location": claimFormData.Location,
//     "date_time": claimFormData.date_time,
//     "description": claimFormData.description,
//     "image": claimFormData.file

//   }

//   const [data, setData] = useState([])

//   useEffect(() => {

//     Axios.post('http://localhost:5000/prClaims', user)
//       .then(res => {
//         console.log(res.data.data)
//         setData(res.data.data)
//       })
//       .catch(err => {
//         console.log(err)
//       })

//   }, []);


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let Response = await Axios.post('http://localhost:5000/claim', claimdata);
//     console.log(claimdata);
//   };

//   return (
//     <main id="main">
//       <section id="" className="extraroom">

//         <div className="row">
//           <div className="col-6">
//             <div className="container">
//               <header className="header">
//                 <h1 id="title" className="text-center ">
//                   Claim Form
//                 </h1>
//                 <p id="description" className="text-center">
//                   Please input all the information to claim your insurance
//                 </p>
//               </header>
//               <div className="form-wrap">
//                 <form id="survey-form">
//                   <div className="row">
//                     <div className="col-md-6">
//                       <div className="form-group">
//                         <label id="name-label" for="name">
//                           Broker Name
//                         </label>
//                         <input
//                           type="text"
//                           name="name"
//                           id="name"
//                           className="form-control"
//                           required
//                           onChange={handleChange}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <div className="form-group">
//                         <label id="email-label" for="email">
//                           Insurance ID
//                         </label>
//                         <input
//                           type="text"
//                           name="Insurance_ID"
//                           id="email"
//                           className="form-control"
//                           required
//                           onChange={handleChange}
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="row">
//                     <div className="col-md-6">
//                       <div className="form-group">
//                         <label id="Insurance-label" for="Insurance">
//                           Policy Code
//                         </label>
//                         <input
//                           type="text"
//                           name="Policy_Code"
//                           id="Insurance"
//                           className="form-control"
//                           placeholder="Insurance ID"
//                           onChange={handleChange}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <div className="form-group">
//                         <label>Type of damage coverage</label>
//                         <select
//                           id="dropdown"
//                           name="damage_coverage"
//                           className="form-control"
//                           required
//                           onChange={handleChange}
//                         >
//                           <option disabled selected value>
//                             Select
//                           </option>
//                           <option value="full coverage">full coverage</option>
//                           <option value="Partial coverage">Partial coverage</option>
//                           <option value="No coverage">No coverage (Just to inform)</option>

//                         </select>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="row">
//                     <div className="col-md-6">
//                       <div className="form-group">
//                         <label id="Insurance-label" for="Insurance">
//                           Location
//                         </label>
//                         <input
//                           type="text"
//                           name="Location"
//                           id="Insurance"
//                           className="form-control"
//                           placeholder="Insurance ID"
//                           onChange={handleChange}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <div className="form-group">
//                         <label>Date and Time</label>
//                         <input
//                           type="datetime-local"
//                           name="date_time"
//                           style=
//                           {{
//                             border: "#bfbec7",
//                             color: "black",
//                             padding: "10px",
//                             borderRadius: "10px",
//                             borderStyle: "solid",
//                           }}
//                           onChange={handleChange}
//                         ></input>
//                       </div>
//                     </div>
//                   </div>

//                   {/* <div className="row">
//                 <div className="col-md-6">
//                   <div className="form-group">
//                     <label>Would you recommend survey to a friend?</label>
//                     <div className="custom-control custom-radio custom-control-inline">
//                       <input
//                         type="radio"
//                         id="customRadioInline1"
//                         value="Definitely"
//                         name="customRadioInline1"
//                         className="custom-control-input"
//                         checked=""
//                       />
//                       <label
//                         className="custom-control-label"
//                         for="customRadioInline1"
//                       >
//                         Definitely
//                       </label>
//                     </div>
//                     <div className="custom-control custom-radio custom-control-inline">
//                       <input
//                         type="radio"
//                         id="customRadioInline2"
//                         value="Maybe"
//                         name="customRadioInline1"
//                         className="custom-control-input"
//                       />
//                       <label
//                         className="custom-control-label"
//                         for="customRadioInline2"
//                       >
//                         Maybe
//                       </label>
//                     </div>
//                     <div className="custom-control custom-radio custom-control-inline">
//                       <input
//                         type="radio"
//                         id="customRadioInline3"
//                         value="Not sure"
//                         name="customRadioInline1"
//                         className="custom-control-input"
//                       />
//                       <label
//                         className="custom-control-label"
//                         for="customRadioInline3"
//                       >
//                         Not sure
//                       </label>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-md-6">
//                   <div className="form-group">
//                     <label>This survey useful yes or no?</label>
//                     <div className="custom-control custom-checkbox custom-control-inline">
//                       <input
//                         type="checkbox"
//                         className="custom-control-input"
//                         name="yes"
//                         value="yes"
//                         id="yes"
//                         checked=""
//                       />
//                       <label className="custom-control-label" for="yes">
//                         Yes
//                       </label>
//                     </div>
//                     <div className="custom-control custom-checkbox custom-control-inline">
//                       <input
//                         type="checkbox"
//                         className="custom-control-input"
//                         name="no"
//                         value="no"
//                         id="no"
//                       />
//                       <label className="custom-control-label" for="no">
//                         No
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//               </div> */}

//                   <div className="row">
//                     <div className="col-md-12">
//                       <div className="form-group">
//                         <label>Describe your situation here</label>
//                         <textarea
//                           id="comments"
//                           className="form-control"
//                           name="description"
//                           placeholder="Describe your issue here..."
//                           onChange={handleChange}
//                         ></textarea>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="row">
//                     <div className="col-md-12">
//                       <div className="form-group">
//                         {/* <label>Upload your documents</label>
//                     <input type="file" className="form-control-file" id="exampleFormControlFile1" /> */}
//                         <label>Please enter any relevent evidence that might describe the damage or the situation. <strong>It could be an image or images or videos</strong> .</label>
//                         <div>
//                           <div className="mb-4 d-flex justify-content-left">

//                             <img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
//                               alt="example placeholder" style={{ width: "300px" }} />
//                           </div>
//                           <div className="d-flex justify-content-left">
//                             <div className="btn btn-primary btn-rounded">
//                               <label className="form-label text-white m-1" for="customFile1">Choose file</label>
//                               <input type="file" name="file" className="form-control d-none" id="customFile1" />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="row">
//                     <div className="col-md-4">
//                       <button
//                         type="submit"
//                         id="submit"
//                         className="btn btn-primary btn-block"
//                         onClick={handleSubmit}
//                       >
//                         Submit Your Claim
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//               </div>

//               <div className="row gy-4"></div>
//             </div>

//           </div>
//           <div className="col-6">
//             <h4 className="text-center">Your previous claims</h4>
//             <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae harum praesentium excepturi. Voluptate tempora repellendus ipsum repudiandae ullam illo possimus tenetur veniam eaque, debitis aspernatur neque at dolor, reprehenderit quis?</p>

//             <div className="accordion" id="accordionPanelsStayOpenExample">



//                                         {data.map((elementInRes, index) => (
//                                             <div className="accordion-item accordion_design" key={index}>
//                                                 <h2 className="accordion-header" id={"panelsStayOpen-headingOne" + index}>


//                                                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#panelsStayOpen-collapseOne" + index} aria-expanded="false" aria-controls={"panelsStayOpen-collapseOne" + index}>
//                                                         <div className='normal_padding'>
//                                                             Claim ID : {elementInRes._id}
//                                                         </div>
//                                                         <div className="vr"></div>
//                                                         <div className='normal_padding'>
//                                                             user name {elementInRes.user_id}
//                                                         </div>
//                                                         <div className='normal_padding thin_text'>
//                                                             Submitted: 12-23-22 14:00 pm {elementInRes.date_time}
//                                                         </div>
//                                                     </button>



//                                                 </h2>
//                                                 <div id={"panelsStayOpen-collapseOne" + index} className="accordion-collapse collapse " aria-labelledby={"panelsStayOpen-headingOne" + index}>
//                                                     <div className="accordion-body">

//                                                         <div className="row">
//                                                             <div className="col-lg-6">
//                                                                 <div className="card">
//                                                                     <div className="card-body">
//                                                                         <h5 className="card-title">First Notice of Loss</h5>
//                                                                         <div className="row">
//                                                                             <div className="col-4 text-center">
//                                                                                 <strong>
//                                                                                     Username
//                                                                                 </strong>
//                                                                             </div>
//                                                                             <div className="col-8">
//                                                                                 name from db
//                                                                             </div>
//                                                                         </div>
//                                                                         <div className="row">
//                                                                             <div className="col-4 text-center">
//                                                                                 <strong>
//                                                                                     User Id
//                                                                                 </strong>
//                                                                             </div>
//                                                                             <div className="col-8">
//                                                                                 id from db
//                                                                             </div>
//                                                                         </div>
//                                                                         <div className="row">
//                                                                             <div className="col-4 text-center">
//                                                                                 <strong>
//                                                                                     Type of Loss
//                                                                                 </strong>
//                                                                             </div>
//                                                                             <div className="col-8">
//                                                                                 type from db
//                                                                             </div>
//                                                                         </div>
//                                                                         <div className="row">
//                                                                             <div className="col-4 text-center">
//                                                                                 <strong>
//                                                                                     Date Notified
//                                                                                 </strong>
//                                                                             </div>
//                                                                             <div className="col-8">
//                                                                                 name from db
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>

//                                                             </div>

//                                                             <div className="col-lg-6">

//                                                                 <div className="card">
//                                                                     <div className="card-body">
//                                                                         <h5 className="card-title">Address of Loss</h5>
//                                                                         <div className="row">
//                                                                             <div className="col-4 text-center">
//                                                                                 <strong>
//                                                                                     Location Type
//                                                                                 </strong>
//                                                                             </div>
//                                                                             <div className="col-8">
//                                                                                 street
//                                                                             </div>
//                                                                         </div>
//                                                                         <div className="row">
//                                                                             <div className="col-4 text-center">
//                                                                                 <strong>
//                                                                                     Address 1
//                                                                                 </strong>
//                                                                             </div>
//                                                                             <div className="col-8">
//                                                                                 address from db
//                                                                             </div>
//                                                                         </div>
//                                                                         <div className="row">
//                                                                             <div className="col-4 text-center">
//                                                                                 <strong>
//                                                                                     Address 2
//                                                                                 </strong>
//                                                                             </div>
//                                                                             <div className="col-8">
//                                                                                 address from db
//                                                                             </div>
//                                                                         </div>
//                                                                         <div className="row">
//                                                                             <div className="col-4 text-center">
//                                                                                 <strong>
//                                                                                     City
//                                                                                 </strong>
//                                                                             </div>
//                                                                             <div className="col-8">
//                                                                                 name from db
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                             <div className="col">
//                                                                 <div className="card">
//                                                                     <div className="card-body">
//                                                                         <h5 className="card-title">Additional Evidence</h5>
//                                                                         {/* <image src={'https://images.pexels.com/photos/163016/crash-test-collision-60-km-h-distraction-163016.jpeg'} alt="image" /> */}
//                                                                         <img src="https://images.pexels.com/photos/163016/crash-test-collision-60-km-h-distraction-163016.jpeg" alt="" style={{ width: '300px', height: '300px' }} />
//                                                                     </div>
//                                                                 </div>

//                                                             </div>

//                                                         </div>

//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         )
//                                         )}









//                                     </div>


//           </div>
//         </div>
//       </section>


//     </main>
//   );



// };

export default Claim;
