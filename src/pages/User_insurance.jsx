import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function User_insurance() {
  const [data, setData] = useState([]);

  useEffect(() => {

    let userId =JSON.parse(localStorage.getItem('user'))._id;
    axios
      .get("http://localhost:5000/userFindAllpolicyes/"+userId)
      .then((res) => {
         setData(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const handleClick = (item) => {
    
        window.location.href = "/message/32434"; 
}


  return (
    <>
      <div class="container extraroom-2">
        <div class="row flex justify-content-between">
          <div className="">
            <h1>Your Policies</h1>

            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">policy_id</th>
                  <th scope="col">policy_name</th>
                  <th scope="col">policy_duration</th>
                  <th scope="col">policy_cost</th>
                  <th scope="col">Expiration</th>
                  <th scope="col">Agent Name</th>
                  <th scope="col">Agent code</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return (
                <tr key={index}>
                    <td >{index + 1}</td>
                    <td>{item._id}</td>
                    <td>{item.policy_name}</td>
                    <td>{item.policy_duration}</td>
                    <td>{item.policy_cost}</td>
                    <td>{item.Expiration}</td>
                    <td>{item.Agent_name}</td>
                    <td>{item.Agent_Id}</td>
                    <td>
                        {/* <Link to="/message/324728348">Chat with Agent</Link> */}
                        <button type="button" class="btn btn-primary" onClick={() => handleClick(item)} > Chat with Agent</button>
                </td>
                </tr>
                  );
                })}

                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default User_insurance;
