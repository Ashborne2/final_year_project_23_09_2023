import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Route, useParams } from "react-router-dom";
import Axios from 'axios';
function Message() {


    const [userdMessage, setUserdMessage] = useState();
    const [input, setInput] = useState()

    const handleChange = (e) => {

        setUserdMessage({        
            ...input,
            [e.target.name]: e.target.value
        })
    };

    



    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        Axios.get('http://localhost:5000/getMessages/' + user._id)
    
          .then(res => {
            
          })
          .catch(err => {
            console.log(err)
          })
    
      }, []);


    let { id } = useParams();

  const userSendMessage = async() =>{

     const user = JSON.parse(localStorage.getItem('user'));
     
    let message ={
        "sender_id":user._id,
        "sender_name":user.fName,
        "receiver_id":"6568d2d40a37fb40f2f10377",
        "receiver_name":"dsadd",
        "message":userdMessage,
        "message_time":Date.now,
    }

    console.log(message)
    
    let result = await axios.post("http://localhost:5000/userSendMessage",message)
    console.log(result)
    console.log(userdMessage)

  }



    return (
        <>
            <main id="main">
                <section className="extraroom">

                    <section style={{ backgroundColor: "#eee;" }}>
                        <div class="container py-5">

                            <div class="row d-flex justify-content-center">
                                <div class="col-md-10 col-lg-8 col-xl-6">

                                    <div class="card" id="chat2">
                                        <div class="card-header d-flex justify-content-between align-items-center p-3">
                                            <h5 class="mb-0">Chat with your Agent</h5>
                                            
                                        </div>
                                        <div class="card-body" data-mdb-perfect-scrollbar="true" style={{ position: "relative", height: "400px", overflowY: "scroll" }}>








                                                {/* Agent */}
                                            <div class="d-flex flex-row justify-content-start">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                                    alt="avatar 1" style={{ width: "45px", height: "100%" }} />
                                                <div>
                                                    <p class="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: "#f5f6f7" }}>Agent</p>
                                                    <p class="small ms-3 mb-3 rounded-3 text-muted">23:58</p>
                                                </div>
                                            </div>


                                         
                                                    {/* user */}
                                            <div class="d-flex flex-row justify-content-end mb-4 pt-1">
                                                <div>
                                                    <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">User</p>
                                                    <p class="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:06</p>
                                                </div>
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                                                    alt="avatar 1" style={{ width: "45px", height: "100%" }} />
                                            </div>

                                             

                                        </div>





                                        <div class="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                                alt="avatar 3" style={{ width: "45px", height: "100%" }} />
                                            <input type="text" class="form-control form-control-lg" id="exampleFormControlInput1"
                                                placeholder="Type message" onChange={handleChange}/>
                                             <button type="button" class="btn btn-primary" data-mdb-ripple-color="dark" style={{margin:"10px"}} onClick={userSendMessage}>Send</button>
                                            
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>

                    
                </section>



            </main>



        </>
    )
}

export default Message