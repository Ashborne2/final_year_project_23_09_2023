
import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Footer from './component/Footer';
import AdminLayout from './pages/AdminLayout';
import Claim from './pages/Claim';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';

import Layout from './pages/Layout';



const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/'>

      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='/claim' element={<Claim />} />
        <Route path='/login' element={<Login />} />
      </Route>

      <Route path='/admin' element={<AdminLayout />}>
        <Route path='' element={<Dashboard />} />
      </Route>

    </Route>

  )

);


function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />

    </>

  );
}

export default App;
