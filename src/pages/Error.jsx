import React from 'react'
import errorimg from '../dash-asset/img/not-found.svg'
import { Link } from 'react-router-dom'

const error = () => {
  return (
    <div>
        <main>
    <div class="container">

      <section class="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <h1>404</h1>
        <h2>The page you are looking for doesn't exist.</h2>
        <Link class="btn" to={'/'}>Back to home</Link>
        <img src={errorimg} class="img-fluid py-5" alt="Page Not Found"/>
        
      </section>

    </div>
  </main>
    </div>
  )
}

export default error