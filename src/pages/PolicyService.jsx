import React, { useEffect } from 'react';
import { Link, redirect } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';
import toast from 'react-hot-toast';


const PolicyServices = () => {
    const [data, setData] = useState([])
    const [selectedProduct, setSelectedProduct] = useState([]);


    const fetchData = async () => {
        // Your fetchData function implementation
        localStorage.getItem('selectedProduct')
    };

    const handleClick = (item) => {
        // e.preventDefault();

        // setSelectedProduct(item);
        // console.log(e.target.abc)
        // console.log({[e.target.key]:e.target.value})
        localStorage.setItem('selectedProduct', JSON.stringify(item))
        // console.log(selectedProduct)
        const myPromise = fetchData();

        toast.promise(myPromise, {
            loading: 'Loading',
            success: 'Redirecting to checkout',
            error: 'Error when fetching',
        });


        setTimeout(() => {
            window.location.href = "/checkout"; //will redirect to your checkout page

        }, 3000);

    }


    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios.get('http://localhost:5000/getpolicy');
            console.log(result.data.data);
            setData(result.data.data);
        };
        fetchData();


    }, []);




    return (
        <>
            <div class="container extraroom-2">
                <div class="row flex justify-content-between">

                    <div class="col-md-5">
                        <div class="py-4">
                            <span class="text-secondary text-uppercase">services</span>
                            <h1 class="text-capitalize font-weight-bold my-3">Insurance <span style={{ color: "#9B5DE5" }}>Services</span></h1>
                            <p class="text-secondary" style={{ lineHeight: " 2" }}>If you're buying a new car or shopping for auto insurance, you'll likely need to understand the common types of coverage available on a car insurance policy. The various types of car insurance coverage are available to help protect you, your passengers and your vehicle if you're involved in a car accident.

                                Depending on where you live, some of these coverages are mandatory and some are optional. Understanding what's required in your state and what each helps cover can help you choose the right coverage for your situation. </p>
                            <p class="text-secondary" style={{ lineHeight: "2" }}> consequatur nesciunt doloribus ad sit reprehenderit, beatae error illo aut!</p>

                        </div>
                        <Link to={"/checkout"} class="btn btn-primary">Learn more</Link>
                        {/* <button className='btn btn-primary' onClick={<Checkout />}>Purchase</button> */}
                    </div>
                    <div class="col-md-6">

                        <div class="row">
                            {data.map((item, index) => {

                                return (
                                    <div class="col-md-6 p-2 text-center" key={index}>
                                        <div class="bg-light px-3 py-5">
                                            <img src={item.file} style={{ weidth: '5rem', height: '5rem' }} alt="" />
                                            <div class="mt-3">
                                                <h5 class="mb-2" style={{ fontWeight: "600" }}><Link to={'#'} style={{ color: "#9B5DE5" }}>{item.Coverage}</Link></h5>
                                                <p class="text-secondary">{item.description}</p>
                                                <h6 class="text-dark">${item.Price}/{item.Duration}</h6>
                                                <button type="button" class="btn btn-primary" onClick={() => handleClick(item)}>Learn more</button>
                                            </div>
                                        </div>
                                    </div>

                                )


                            })}

                            {/* <div class="col-md-6 p-2 text-center">
                                <div class="bg-light px-3 py-5">
                                    <img src="	https://cdn-icons-png.flaticon.com/512/4544/4544523.png" style={{ weidth: '5rem', height: '5rem' }} alt="" />
                                    <div class="mt-3">
                                        <h5 class="mb-2" style={{ fontWeight: "600" }}><Link to={'#'} style={{ color: "#9B5DE5" }}>Liability Coverage</Link></h5>
                                        <p class="text-secondary">Bodily and property injury liability</p>
                                        <button type="button" class="btn btn-primary">Learn more</button>
                                    </div>
                                </div>
                            </div> */}

                            {/* <div class="col-md-6 p-2 text-center">

                                <div class="bg-light px-3 py-5">
                                    <img src="	https://cdn-icons-png.flaticon.com/512/4350/4350983.png" style={{ weidth: '5rem', height: '5rem' }} alt="" />
                                    <div class="mt-3">
                                        <h5 class="mb-2" style={{ fontWeight: "600" }}><Link to={'#'}  style={{ color: "#9B5DE5" }}>Comprehensive coverage</Link></h5>
                                        <p class="text-secondary">theft, fire, hail or vandalism etc damage</p>
                                        <button type="button" class="btn btn-primary">Learn more</button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 p-2 text-center">
                                <div class="bg-light px-3 py-5">
                                    <img src="	https://cdn-icons-png.flaticon.com/512/9140/9140820.png" style={{ weidth: '5rem', height: '5rem' }} alt="" />
                                    <div class="mt-3">
                                        <h5 class="mb-2" style={{ fontWeight: "600" }}><Link to={'#'}  style={{ color: "#9B5DE5" }}>Collision coverage</Link></h5>
                                        <p class="text-secondary">accident with another vehicle, or if you hit an object such as a fence</p>
                                        <button type="button" class="btn btn-primary">Learn more</button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 p-2 text-center">
                                <div class="bg-light px-3 py-5">
                                    <img src="https://cdn-icons-png.flaticon.com/512/9835/9835782.png" style={{ weidth: '5rem', height: '5rem' }} alt="" />
                                    <div class="mt-3">
                                        <h5 class="mb-2" style={{ fontWeight: "600" }}><Link to={'#'}  style={{ color: "#9B5DE5" }}>Medical payments coverage</Link></h5>
                                        <p class="text-secondary">If you're hit by a driver who doesn't have insurance</p>
                                        <button type="button" class="btn btn-primary">Learn more</button>
                                    </div>
                                </div>
                            </div> */}

                        </div>

                    </div>

                </div>
            </div>

        </>
    );
};

export default PolicyServices;
