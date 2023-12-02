import React from "react";
import "../dash-asset/css/dashboard.css";
// import "../dash-asset/vendor/bootstrap/css/bootstrap.min.css";
// import logo from "../dash-asset/img/radiant.png";
import { Link, parsePath } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import axios from "axios";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

const Dashboard = () => {
  const navigate = useNavigate();

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  
  const [username, setUsername] = useState("");
  const [forchart, setForchart] = useState([]);
  const [lebel, setLebel] = useState([]);


  useEffect(() => {

    axios.get('http://localhost:5000/getAllPayments')
      .then(res => {

        // let data23 = res.data.data.map((item) => [Number(item.policy_cost)])
        // let data24 = res.data.data.map((item) => item.policy_name)
        // setForchart(data23)


          // count all policy types
          let policyType = res.data.data;
          let policyTypeCount = {};
          // console.log(policyType);



          // policyType.forEach(function (i) { policyTypeCount[i] = (policyTypeCount[i] || 0) + 1; });


          // policyType.forEach(function (i) { policyTypeCount[i] = (policyTypeCount[i] || 0) + 1; });
          // console.log(policyTypeCount);




      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const options = {

  };

  const data= {
    "policyType":["Colission", "accident", "theft", "fire", "flood", "other"],
    "data":[32,5,34,65,76,7,67,34,5]
  }



const [chartData, setChartData] = useState({
    // labels: forchart.map((item) => item.policy_name),
    // labels: ["Colission", "accident", "theft", "fire", "flood", "other"],
    labels: data.policyType,
    datasets: [
      {
        label: "Policy Name",
        // data: forchart,
        data: data.data,
        borderColor: ["rgba(255, 206, 86, 0.2)"],
        backgroundColor: ["rgba(255, 206, 86, 0.2)"],
        pointBackgroundColor: ["rgba(255, 206, 86, 0.2)"],
        pointBorderColor: ["rgba(255, 206, 86, 0.2)"],
      },
      // {
      //   label: "Policy Name",
      //   // data: forchart.map((item ,index) => parseInt(item.policy_cost)),
      //   data: [12, 15, 3, 5, 2, 3],
      //   borderColor: ["rgba(255, 206, 86, 0.2)"],
      //   backgroundColor: ["rgba(255, 206, 86, 0.2)"],
      //   pointBackgroundColor: ["rgba(255, 206, 86, 0.2)"],
      //   pointBorderColor: ["rgba(255, 206, 86, 0.2)"],
      // },
     
    ],
  });

  return (
    <>

      <div class="container-fluid">
        <div class="row flex-nowrap">       
          <div class="col py-3">
            <main id="dash-main" class="dash-main">
              <div class="pagetitle">
                <h1>Dashboard</h1>
              </div>

              <section class="section dashboard">
                <div class="row">
                  <div class="col-lg-8">
                    <div class="row">
                      <div class="col-xxl-4 col-md-6">
                        <div class="card info-card sales-card">
                          <div class="card-body">
                            <h5 class="card-title t1">Total claims</h5>
                            <div class="d-flex align-items-center">
                              <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                <i class="ri-file-list-3-line"></i>
                              </div>
                              <div class="ps-3">
                                <h6>145</h6>
                                <span class="text-success small pt-1 fw-bold">
                                  12%
                                </span>{" "}
                                <span class="text-muted small pt-2 ps-1">
                                  increase
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-xxl-4 col-md-6">
                        <div class="card info-card revenue-card">
                          <div class="card-body">
                            <h5 class="card-title t1">Claims Resolved</h5>

                            <div class="d-flex align-items-center">
                              <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                <i class="ri-article-fill"></i>
                              </div>
                              <div class="ps-3">
                                <h6>$3,264</h6>
                                <span class="text-success small pt-1 fw-bold">
                                  8%
                                </span>{" "}
                                <span class="text-muted small pt-2 ps-1">
                                  increase
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-xxl-4 col-xl-12">
                        <div class="card info-card customers-card">
                          <div class="card-body">
                            <h5 class="card-title t1">Claims in review</h5>

                            <div class="d-flex align-items-center">
                              <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                <i class="ri-draft-line"></i>
                              </div>
                              <div class="ps-3">
                                <h6>1244</h6>
                                <span class="text-danger small pt-1 fw-bold">
                                  12%
                                </span>{" "}
                                <span class="text-muted small pt-2 ps-1">
                                  decrease
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="card recent-sales overflow-auto">
                          <div class="card-body">
                            <h5 class="card-title">
                              Recent Sales <span>| Today</span>
                            </h5>

                            <table class="table table-borderless datatable">
                              <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Customer</th>
                                  <th scope="col">Product</th>
                                  <th scope="col">Price</th>
                                  <th scope="col">Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">
                                    #2457
                                  </th>
                                  <td>Brandon Jacob</td>
                                  <td>

                                    At praesentium minu

                                  </td>
                                  <td>$64</td>
                                  <td>
                                    <span class="badge bg-success">Approved</span>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">
                                    #2147
                                  </th>
                                  <td>Bridie Kessler</td>
                                  <td>

                                    Blanditiis dolor omnis similique

                                  </td>
                                  <td>$47</td>
                                  <td>
                                    <span class="badge bg-warning">Pending</span>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">
                                    #2049
                                  </th>
                                  <td>Ashleigh Langosh</td>
                                  <td>

                                    At recusandae consectetur

                                  </td>
                                  <td>$147</td>
                                  <td>
                                    <span class="badge bg-success">Approved</span>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">
                                    #2644
                                  </th>
                                  <td>Angus Grady</td>
                                  <td>

                                    Ut voluptatem id earum et

                                  </td>
                                  <td>$67</td>
                                  <td>
                                    <span class="badge bg-danger">Rejected</span>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">
                                    #2644
                                  </th>
                                  <td>Raheem Lehner</td>
                                  <td>
                                    Sunt similique distinctio

                                  </td>
                                  <td>$165</td>
                                  <td>
                                    <span class="badge bg-success">Approved</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="card top-selling overflow-auto">
                          <div class="card-body pb-0">
                            <h5 class="card-title">
                              Performance evaluation <span>| Charts</span>
                            </h5>
                            <Bar data={chartData} options={options} />
                            {/* <Line data={chartData} /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="card">
                      <div class="filter">
                        <a class="icon" href="#" data-bs-toggle="dropdown">
                          <i class="bi bi-three-dots"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li class="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li>
                            <a class="dropdown-item" href="#">
                              Today
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              This Week
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              This Month
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              This Year
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div class="card-body">
                        <h5 class="card-title">
                          Recent Claims <span>| Today</span>
                        </h5>

                        <div class="activity">
                          <div class="activity-item d-flex">
                            <div class="activite-label">32 min</div>
                            <i class="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                            <div class="activity-content">
                              Quia quae rerum{" "}
                              <a href="#" class="fw-bold text-dark">
                                explicabo officiis
                              </a>{" "}
                              beatae
                            </div>
                          </div>

                          <div class="activity-item d-flex">
                            <div class="activite-label">56 min</div>
                            <i class="bi bi-circle-fill activity-badge text-danger align-self-start"></i>
                            <div class="activity-content">
                              Voluptatem blanditiis blanditiis eveniet
                            </div>
                          </div>

                          <div class="activity-item d-flex">
                            <div class="activite-label">2 hrs</div>
                            <i class="bi bi-circle-fill activity-badge text-primary align-self-start"></i>
                            <div class="activity-content">
                              Voluptates corrupti molestias voluptatem
                            </div>
                          </div>

                          <div class="activity-item d-flex">
                            <div class="activite-label">1 day</div>
                            <i class="bi bi-circle-fill activity-badge text-info align-self-start"></i>
                            <div class="activity-content">
                              Tempore autem saepe{" "}
                              <a href="#" class="fw-bold text-dark">
                                occaecati voluptatem
                              </a>{" "}
                              tempore
                            </div>
                          </div>

                          <div class="activity-item d-flex">
                            <div class="activite-label">2 days</div>
                            <i class="bi bi-circle-fill activity-badge text-warning align-self-start"></i>
                            <div class="activity-content">
                              Est sit eum reiciendis exercitationem
                            </div>
                          </div>

                          <div class="activity-item d-flex">
                            <div class="activite-label">4 weeks</div>
                            <i class="bi bi-circle-fill activity-badge text-muted align-self-start"></i>
                            <div class="activity-content">
                              Dicta dolorem harum nulla eius. Ut quidem quidem sit
                              quas
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-body pb-0">
                        <h5 class="card-title">
                          Website Traffic <span>| Today</span>
                        </h5>

                        {/* <div
                    id="trafficChart"
                    style={{ height: "400px" }}
                    class="echart"
                  ></div> */}

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
};

export default Dashboard;