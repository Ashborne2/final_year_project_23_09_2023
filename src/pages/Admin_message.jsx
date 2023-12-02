import React from 'react'
import { useState, useEffect } from 'react'

function Message() {
    const [data, setData] = useState([])
    const [claimFormData, setClaimFormData] = useState({})

    const handleChange = (e) => {

        setData({
            ...claimFormData,
            [e.target.name]: e.target.value
        })
    };



    return (
        <>
            <div class="container extraroom-2">
                <div class="container py-5">

                    <div class="row d-flex justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-6">

                            <div class="card" id="chat2">
                                <div class="card-header d-flex justify-content-between align-items-center p-3">
                                    <h5 class="mb-0">Chat with your Client</h5>
                                    <button type="button" class="btn btn-primary btn-sm" data-mdb-ripple-color="dark">Let's Chat
                                        App</button>
                                </div>
                                <div class="card-body" data-mdb-perfect-scrollbar="true" style={{ position: "relative", height: "400px", overflowY: "scroll" }}>                                 

                                    <div class="d-flex flex-row justify-content-start mb-4">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                            alt="avatar 1" style={{ width: "45px", height: "100%" }} />
                                        <div>
                                            <p class="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: "#f5f6f7" }}>Sorry I don't
                                                have. i
                                                changed my phone.</p>
                                            <p class="small ms-3 mb-3 rounded-3 text-muted">00:13</p>
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row justify-content-end">
                                        <div>
                                            <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Okay then see you on sunday!!
                                            </p>
                                            <p class="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:15</p>
                                        </div>
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                                            alt="avatar 1" style={{ width: "45px", height: "100%" }} />
                                    </div>

                                </div>
                                <div class="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                        alt="avatar 3" style={{ width: "45px", height: "100%" }} />
                                    <input type="text" class="form-control form-control-lg" id="exampleFormControlInput1"
                                        placeholder="Type message" />
                                    <button type="button" class="btn btn-primary" data-mdb-ripple-color="dark" style={{ margin: "10px" }}>Send</button>
                                    {/* <a class="ms-1 text-muted" href="#!"><i class="fas fa-paperclip"></i></a>
                <a class="ms-3 text-muted" href="#!"><i class="fas fa-smile"></i></a>
                <a class="ms-3" href="#!"><i class="fas fa-paper-plane"></i></a> */}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>




        </>
    )
}

export default Message