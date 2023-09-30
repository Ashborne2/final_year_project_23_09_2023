import React from "react";
import { Navigate } from "react-router-dom";

const Claim = () => {
  // if (!loggedIn) {
  //   // if the user is not logged in, redirect to the login page
  //   return <Navigate to="/login" />;
  //   // Navigate('/login')
  // }else{

  //    return (
  //   <main id="main">
  //     <section id="" class="">
  //       <div class="container">
  //         <header class="header">
  //           <h1 id="title" class="text-center">
  //             Claim Form
  //           </h1>
  //           <p id="description" class="text-center">
  //             Please input all the information to claim your insurance
  //           </p>
  //         </header>
  //         <div class="form-wrap">
  //           <form id="survey-form">
  //             <div class="row">
  //               <div class="col-md-6">
  //                 <div class="form-group">
  //                   <label id="name-label" for="name">
  //                     Name
  //                   </label>
  //                   <input
  //                     type="text"
  //                     name="name"
  //                     id="name"
  //                     placeholder="Enter your name"
  //                     class="form-control"
  //                     required
  //                   />
  //                 </div>
  //               </div>
  //               <div class="col-md-6">
  //                 <div class="form-group">
  //                   <label id="email-label" for="email">
  //                     Email<small>(optional)</small>
  //                   </label>
  //                   <input
  //                     type="email"
  //                     name="email"
  //                     id="email"
  //                     placeholder="Enter your email"
  //                     class="form-control"
  //                     required
  //                   />
  //                 </div>
  //               </div>
  //             </div>

  //             <div class="row">
  //               <div class="col-md-6">
  //                 <div class="form-group">
  //                   <label id="Insurance-label" for="Insurance">
  //                     Insurance ID
  //                   </label>
  //                   <input
  //                     type="text"
  //                     name="Insurance-ID"
  //                     id="Insurance"
  //                     class="form-control"
  //                     placeholder="Insurance ID"
  //                   />
  //                 </div>
  //               </div>
  //               <div class="col-md-6">
  //                 <div class="form-group">
  //                   <label>current role</label>
  //                   <select
  //                     id="dropdown"
  //                     name="role"
  //                     class="form-control"
  //                     required
  //                   >
  //                     <option disabled selected value>
  //                       Select
  //                     </option>
  //                     <option value="student">Student</option>
  //                     <option value="job">Full Time Job</option>
  //                     <option value="learner">Full Time Learner</option>
  //                     <option value="preferNo">Prefer not to say</option>
  //                     <option value="other">Other</option>
  //                   </select>
  //                 </div>
  //               </div>
  //             </div>

  //             <div class="row">
  //               <div class="col-md-6">
  //                 <div class="form-group">
  //                   <label>Would you recommend survey to a friend?</label>
  //                   <div class="custom-control custom-radio custom-control-inline">
  //                     <input
  //                       type="radio"
  //                       id="customRadioInline1"
  //                       value="Definitely"
  //                       name="customRadioInline1"
  //                       class="custom-control-input"
  //                       checked=""
  //                     />
  //                     <label
  //                       class="custom-control-label"
  //                       for="customRadioInline1"
  //                     >
  //                       Definitely
  //                     </label>
  //                   </div>
  //                   <div class="custom-control custom-radio custom-control-inline">
  //                     <input
  //                       type="radio"
  //                       id="customRadioInline2"
  //                       value="Maybe"
  //                       name="customRadioInline1"
  //                       class="custom-control-input"
  //                     />
  //                     <label
  //                       class="custom-control-label"
  //                       for="customRadioInline2"
  //                     >
  //                       Maybe
  //                     </label>
  //                   </div>
  //                   <div class="custom-control custom-radio custom-control-inline">
  //                     <input
  //                       type="radio"
  //                       id="customRadioInline3"
  //                       value="Not sure"
  //                       name="customRadioInline1"
  //                       class="custom-control-input"
  //                     />
  //                     <label
  //                       class="custom-control-label"
  //                       for="customRadioInline3"
  //                     >
  //                       Not sure
  //                     </label>
  //                   </div>
  //                 </div>
  //               </div>

  //               <div class="col-md-6">
  //                 <div class="form-group">
  //                   <label>This survey useful yes or no?</label>
  //                   <div class="custom-control custom-checkbox custom-control-inline">
  //                     <input
  //                       type="checkbox"
  //                       class="custom-control-input"
  //                       name="yes"
  //                       value="yes"
  //                       id="yes"
  //                       checked=""
  //                     />
  //                     <label class="custom-control-label" for="yes">
  //                       Yes
  //                     </label>
  //                   </div>
  //                   <div class="custom-control custom-checkbox custom-control-inline">
  //                     <input
  //                       type="checkbox"
  //                       class="custom-control-input"
  //                       name="no"
  //                       value="no"
  //                       id="no"
  //                     />
  //                     <label class="custom-control-label" for="no">
  //                       No
  //                     </label>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>

  //             <div class="row">
  //               <div class="col-md-12">
  //                 <div class="form-group">
  //                   <label>Leave Message</label>
  //                   <textarea
  //                     id="comments"
  //                     class="form-control"
  //                     name="comment"
  //                     placeholder="Describe your issue here..."
  //                   ></textarea>
  //                 </div>
  //               </div>
  //             </div>

  //             <div class="row">
  //               <div class="col-md-4">
  //                 <button
  //                   type="submit"
  //                   id="submit"
  //                   class="btn btn-primary btn-block"
  //                 >
  //                   Submit Your Claim
  //                 </button>
  //               </div>
  //             </div>
  //           </form>
  //         </div>

  //         <div class="row gy-4"></div>
  //       </div>
  //     </section>
  //   </main>
  // );

  // }

  return (
    <main id="main">
      <section id="" class="">
        <div class="container">
          <header class="header">
            <h1 id="title" class="text-center">
              Claim Form
            </h1>
            <p id="description" class="text-center">
              Please input all the information to claim your insurance
            </p>
          </header>
          <div class="form-wrap">
            <form id="survey-form">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label id="name-label" for="name">
                      Broker Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label id="email-label" for="email">
                      Insurance ID
                    </label>
                    <input
                      type="text"
                      name="Insurance_ID"
                      id="email"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label id="Insurance-label" for="Insurance">
                      Policy Code
                    </label>
                    <input
                      type="text"
                      name="Insurance-ID"
                      id="Insurance"
                      class="form-control"
                      placeholder="Insurance ID"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Type of damage coverage</label>
                    <select
                      id="dropdown"
                      name="role"
                      class="form-control"
                      required
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

              {/* <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Would you recommend survey to a friend?</label>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        id="customRadioInline1"
                        value="Definitely"
                        name="customRadioInline1"
                        class="custom-control-input"
                        checked=""
                      />
                      <label
                        class="custom-control-label"
                        for="customRadioInline1"
                      >
                        Definitely
                      </label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        id="customRadioInline2"
                        value="Maybe"
                        name="customRadioInline1"
                        class="custom-control-input"
                      />
                      <label
                        class="custom-control-label"
                        for="customRadioInline2"
                      >
                        Maybe
                      </label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        id="customRadioInline3"
                        value="Not sure"
                        name="customRadioInline1"
                        class="custom-control-input"
                      />
                      <label
                        class="custom-control-label"
                        for="customRadioInline3"
                      >
                        Not sure
                      </label>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label>This survey useful yes or no?</label>
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        name="yes"
                        value="yes"
                        id="yes"
                        checked=""
                      />
                      <label class="custom-control-label" for="yes">
                        Yes
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        name="no"
                        value="no"
                        id="no"
                      />
                      <label class="custom-control-label" for="no">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div> */}

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>Describe your situation here</label>
                    <textarea
                      id="comments"
                      class="form-control"
                      name="comment"
                      placeholder="Describe your issue here..."
                    ></textarea>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    {/* <label>Upload your documents</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1" /> */}
                    <label>Please enter any relevent evidence that might describe the damage or the situation. <strong>It could be an image or images or videos</strong> .</label>
                    <div>
                      <div class="mb-4 d-flex justify-content-left">
                        
                        <img src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
                          alt="example placeholder" style={{ width: "300px" }} />
                      </div>
                      <div class="d-flex justify-content-left">
                        <div class="btn btn-primary btn-rounded">
                          <label class="form-label text-white m-1" for="customFile1">Choose file</label>
                          <input type="file" class="form-control d-none" id="customFile1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-4">
                  <button
                    type="submit"
                    id="submit"
                    class="btn btn-primary btn-block"
                  >
                    Submit Your Claim
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div class="row gy-4"></div>
        </div>
      </section>
    </main>
  );



};

export default Claim;
