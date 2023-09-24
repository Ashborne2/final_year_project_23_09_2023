
import React, { Fragment, useContext, useEffect } from 'react';
import {createBrowserRouter,createRoutesFromElements,Router,RouterProvider, Routes} from "react-router-dom";
import { BrowserRouter, Link,Route } from 'react-router-dom';
import Home from './pages/Home';
import { Navbar } from './component/Navbar';
import Footer from './component/Footer';
import Claim from './pages/Claim';
import Dashboard from './pages/Dashboard';
import EmProfile from './pages/EmProfile';
import Register from './pages/Register';
import Login from './pages/Login';
import Error from './pages/Error';

import Layout from './pages/Layout';



const router=createBrowserRouter(
createRoutesFromElements(
  
  <Route path='/'>
    
    <Route>
    <Route  index element={<Home />} />
    <Route path='/claim' element={<Claim />} />
    </Route>
    
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/employee' element={<EmProfile />} />
  </Route>
  
)

);


function App() {
  return (
    <>

    {/* <nav><Navbar /></nav> */}
    {/* <Navbar /> */}
    
   
      
      {/* <Route index element={<Home />} /> */}
      {/* <Route path='/' element={<Navbar />}> */}


      {/* <Route path='/' element={<Home />} /> */}
      
      
      {/* </Route> */}
      
      
      {/* <Route path='/dashboard' element={<Dashboard />} /> */}



      {/* <Route path='/employee' element={<EmProfile />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/error' element={<Error />} /> */}
      
      
      {/* <Route path='/claim' element={<Claim />} /> */}
      
      
     <RouterProvider router={router} />
      
    
    
    
   

      

    
    <Footer />
        
    </>
    
  );
}

export default App;
