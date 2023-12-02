
import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Footer from './component/Footer';
import AdminLayout from './pages/AdminLayout';
import Claim from './pages/Claim';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Layout from './pages/Layout';
import Register from './pages/Register';
import EmProfile from './pages/EmProfile';
import AdminClaim from './pages/Admin_Claim';
import PolicyService from './pages/PolicyService';
import AdminPolicy from './pages/Admin_Policies';
import Message from './pages/Message';
import Checkout from './pages/Checkout';
import AdminUser from './pages/Admin_User';
import AdminPayment from './pages/Admin_Payment';
import UserInsurance from './pages/User_insurance';
import AdminMessage from './pages/Admin_message';



const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/'>

      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='/claim' element={<Claim />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        
        <Route path='/policyservice' element={<PolicyService />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/userinsurance' element={<UserInsurance />} />
        
        <Route path='/message/:id' element={<Message />} />
        
        
      </Route>

      <Route path='/admin' element={<AdminLayout />}>
        <Route path='' element={<Dashboard />} />
        <Route path='/admin/emprofile' element={<EmProfile />} />
        <Route path='/admin/admin_claim' element={<AdminClaim />} />
        <Route path='/admin/admin_policy' element={<AdminPolicy />} />
        <Route path='/admin/admin_user' element={<AdminUser />} />
        <Route path='/admin/admin_payment' element={<AdminPayment />} />
        <Route path='/admin/admin_message' element={<AdminMessage />} />
      </Route>

    </Route>

  )

);


function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Footer /> */}

    </>

  );
}

export default App;
