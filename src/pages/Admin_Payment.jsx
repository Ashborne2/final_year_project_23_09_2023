import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Admin_Payment() {
  const [data, setData] = useState([]);
  const [agents, setAgents] = useState([]);
  const [claimId, setClaimId] = useState();




  const [selectedAgent, setSelectedAgent] = useState();






  useEffect(() => {
    // Retrieve the token from local storage
    axios
      .get("http://localhost:5000/getPayments")
      .then((res) => {
        // console.log(res.data.data)
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getAgent = async (data) => {
    let result = await axios.get("http://localhost:5000/getAgent", data);
    
    setAgents(result.data.data);
    setClaimId(data)
  };

  

  const saveChages = async () => {
    let agent;
    agents.forEach(element => {
        if (element._id == selectedAgent) {
            agent = element;
        }
    });


    let data = {
        "claimId":claimId,
        "agentId":agent._id,
        "agentName":agent.fName
    }

    


  };

  const onChange = (e) => {
    // console.log(e.target.value);
    setSelectedAgent(e.target.value)
  };








  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col py-3">
            <main id="dash-main" className="dash-main">
              <div className="pagetitle">
                <h1>Payment Details</h1>
              </div>

              <section className="section">
                <div className="accordion_wrapper">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Payment Details</h5>
                      <p>
                        Process <code>Payments</code> and Details
                      </p>

                      <table class="table table-borderless text-center">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Policy Name</th>
                            <th scope="col">Policy ID</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Price</th>

                            <th scope="col">Car Holder's Name</th>
                            <th scope="col">Card Number</th>
                            <th scope="col">Expiration</th>
                            <th scope="col">CVV</th>
                            <th scope="col">Assign</th>
                            <th scope="col">Agent</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((elementInRes, index) => (
                            <tr >
                              <th scope="row">{index + 1}</th>
                              <td>{elementInRes.policy_name}</td>
                              <td>{elementInRes._id}</td>
                              <td>{elementInRes.username}</td>
                              <td>{elementInRes.policy_duration}</td>
                              <td>{elementInRes.policy_cost}</td>

                              <td>{elementInRes.CHName}</td>
                              <td>{elementInRes.cardno}</td>
                              <td>{elementInRes.Expiration}</td>
                              <td>{elementInRes.CVV}</td>
                              <td>
                              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getAgent(elementInRes._id)}>
  Assign
</button>
                              </td>
                             
                              <td></td>

                              {/* <td><button type="button" class="btn btn-info"></button></td>
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
                                                                </div></td> */}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    


                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Assign Agent</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label htmlFor="">All Agents</label>
        <select name="" id="" onChange={onChange}>
                    {agents.map((elementInRes, index) => (
                        // <option value={}>s</option>
                        <option  value={elementInRes._id}>{elementInRes.username}</option>
                    ))}
       </select>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={saveChages}>Save changes</button>
      </div>
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
}

export default Admin_Payment;



