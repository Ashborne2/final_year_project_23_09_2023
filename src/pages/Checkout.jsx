import React, { useEffect } from 'react'
import { useState } from 'react'
import Axios from 'axios'
import toast from 'react-hot-toast';

function Checkout() {
  const [FormData, setFormData] = useState({});
  const user = JSON.parse(localStorage.getItem('user'));
  const [selectedProduct, setSelectedProduct] = useState([]);

  useEffect(() => {

    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    console.log(selectedProduct);
    setSelectedProduct(selectedProduct);


  }, []);

  const handleChange = (e) => {
    console.log([e.target.name], e.target.value)
    setFormData({
     
      ...FormData,
      [e.target.name]: e.target.value
      
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let Response = await Axios.post('http://localhost:5000/checkout', FormData);
    // if (Response.data['status'] === 'failed') {
    //   toast.error(Response.data.message);
    // } else if (Response.data['status'] === 'success') {
    //   toast.success(Response.data.message);
    // }

    console.log(FormData);
  };


  return (
    <>
      <main id="main">
        <section className="extraroom">
          <section class="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
            <div class="container py-5 h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col">
                  <div class="card">
                    <div class="card-body p-4">

                      <div class="row">

                        <div class="col-lg-7">
                          <h5 class="mb-3"><a href="#!" class="text-body"><i class="bi bi-arrow-left-circle"></i>  Continue Payment</a></h5>
                          <hr />

                          <div class="d-flex justify-content-between align-items-center mb-4">
                            <div>
                              <p class="mb-1">Your selected services</p>                              
                            </div>
                            {/* <div>
                    <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!"
                        class="text-body">price <i class="fas fa-angle-down mt-1"></i></a></p>
                  </div> */}
                          </div>

                          <div class="card mb-3">
                            <div class="card-body">
                              <div class="d-flex justify-content-between">
                                <div class="d-flex flex-row align-items-center">
                                  <div>
                                    <img
                                      src={selectedProduct.file}
                                      class="img-fluid rounded-3" alt="Shopping item" style={{ width: "65px" }} />
                                  </div>
                                  <div class="ms-3">
                                    <h5>{selectedProduct.Coverage}</h5>
                                    <p class="small mb-0">{selectedProduct.Duration}</p>
                                  </div>
                                </div>
                                <div class="d-flex flex-row align-items-center">
                                  <div style={{ width: "50px" }}>
                                    <h5 class="fw-normal mb-0"> Cost: </h5>
                                  </div>
                                  <div style={{ width: "80px" }}>
                                    <h5 class="mb-0">$ {selectedProduct.Price}</h5>
                                  </div>
                                  <a href="#!" style={{ color: "#cecece" }}><i class="fas fa-trash-alt"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>


                        </div>
                        <div class="col-lg-5">
                          <form action="">
                            <div class="card bg-primary text-white rounded-3">
                              <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center mb-4">
                                  <h5 class="mb-0">Card details</h5>
                                  {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                    class="img-fluid rounded-3" style={{ width: "45px" }} alt="Avatar" /> */}
                                    
                                </div>

                                <p class="small mb-2">Card type</p>
                                <a href="#!" type="submit" class="text-white"><i class="bi bi-credit-card"></i> Visa</a>
                                <a href="#!" type="submit" class="text-white"><i
                                  class="fab fa-cc-amex fa-2x me-2"></i></a>
                                <a href="#!" type="submit" class="text-white"><i class="bi bi-credit-card-2-front"></i> Mastercard</a>
                                <a href="#!" type="submit" class="text-white"><i
                                  class="fab fa-cc-amex fa-2x me-2"></i></a>
                                <a href="#!" type="submit" class="text-white"><i class="bi bi-paypal"></i> Paypal</a>

                                <form class="mt-4">
                                  <div class="form-outline form-white mb-4">
                                    <input onChange={handleChange} name="CHName" type="text" id="typeName" class="form-control form-control-lg" siez="17"
                                      placeholder="Cardholder's Name"></input>
                                    <label class="form-label" for="typeName">Cardholder's Name</label>
                                  </div>

                                  <div class="form-outline form-white mb-4">
                                    <input onChange={handleChange} name='cardno' type="text" id="typeText" class="form-control form-control-lg" siez="17"
                                      placeholder="1234 5678 9012 3457" minlength="19" maxlength="19"></input>
                                    <label class="form-label" for="typeText">Card Number</label>
                                  </div>

                                  <div class="row mb-4">
                                    <div class="col-md-6">
                                      <div class="form-outline form-white">
                                        <input onChange={handleChange} name='Expiration' type="text" id="typeExp" class="form-control form-control-lg"
                                          placeholder="MM/YYYY" size="7" minlength="7" maxlength="7"></input>
                                        <label class="form-label" for="typeExp">Expiration</label>
                                      </div>
                                    </div>
                                    <div class="col-md-6">
                                      <div class="form-outline form-white">
                                        <input onChange={handleChange} name='CVV' type="password" class="form-control form-control-lg"
                                          placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3"></input>
                                        <label class="form-label" for="typeText">Cvv</label>
                                      </div>
                                    </div>
                                  </div>

                                </form>

                                <hr class="my-4" />

                                <div class="d-flex justify-content-between">
                                  <p class="mb-2">Subtotal</p>
                                  <p class="mb-2">$4798.00</p>
                                </div>

                                <div class="d-flex justify-content-between">
                                  <p class="mb-2">Shipping</p>
                                  <p class="mb-2">$20.00</p>
                                </div>

                                <div class="d-flex justify-content-between mb-4">
                                  <p class="mb-2">Total(Incl. taxes)</p>
                                  <p class="mb-2">$4818.00</p>
                                </div>

                                <button onClick={handleSubmit} type="button" class="btn btn-info btn-block btn-lg">

                                  <span>Checkout</span>

                                </button>

                              </div>
                            </div>
                          </form>



                        </div>

                      </div>

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

export default Checkout