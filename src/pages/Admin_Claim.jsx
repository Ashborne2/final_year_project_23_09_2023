import React from 'react'
import "../dash-asset/css/dashboard.css";
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';

function Admin_Claim() {
    // let loop = [
    //     {
    //         "name": "Robert"
    //     },
    //     {
    //         "name": "Micheal"
    //     }
    // ]

    const [data, setData] = useState([])



    useEffect(() => {

        axios.get('http://localhost:5000/adminClaim')
            .then(res => {
                console.log(res.data.data)
                setData(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    // update ststus
    const handleStatus = async (id,status) => {

        let data = {
            "id":id,
            "status":status
        }

        let result = await axios.post('http://localhost:5000/upStatus',data);
        if(result.data['status']=='success'){
            toast.success("Claim Status Updated")
            setTimeout(() => {
               window.location.reload(); 
            }, 3000);

            
        }  else{
            
        }
        
        
    };



    return (
        <>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col py-3">
                        <main id="dash-main" className="dash-main">

                            <div className="pagetitle">
                                <h1>Manage your claims</h1>
                            </div>

                            <section className="section">
                                <div className="accordion_wrapper">

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
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Update Status</th>
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
                                                            <td style={{ color: "red" }}>{elementInRes.status}</td>



                                                            <td><button type="button" class="btn btn-success" id='Astatus' onClick={()=> handleStatus(elementInRes._id,'Approve')}>Approve</button></td>


                                                            <td><button type="button" class="btn btn-danger" id='Dstatus' onClick={()=> handleStatus(elementInRes._id,'Decline')}>Decline</button></td>





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

                            </section>

                        </main>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Admin_Claim