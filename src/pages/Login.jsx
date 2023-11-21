import Axios from 'axios'
import React, { useState } from 'react'
import { Link, json, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'


const Login = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      let response = await Axios.post('http://localhost:5000/login', { username, password });


      if (response.data['status'] === 'failed') {
        toast.error(response.data['message'])
        // alert(response.data['message'])
        console.log(Response)
      } else if (response.data['status'] === 'success') {

        if (response.data['user']['userType'] === 'Employee') {
          toast.success(response.data['user']['username'] + " " + response.data['message'])
          const user = response.data['user']
          localStorage.setItem('token', response.data['token'])
          localStorage.setItem('user', JSON.stringify(user))
          navigate('/admin')
          window.location.reload();
        } else if (response.data['user']['userType'] === 'Customer') {
          toast.success(response.data['user']['username'] + " " + response.data['message'])
          const user = response.data['user']
          localStorage.setItem('token', response.data['token'])
          localStorage.setItem('user', JSON.stringify(user))
          navigate('/')
          window.location.reload();
        }
        // alert(response.data['message'])

        // const user = response.data['user']

        // localStorage.setItem('token', response.data['token'])
        // localStorage.setItem('user', JSON.stringify(user))
        // navigate('/')
        // window.location.reload();

      }

    } catch (e) {
      console.log(e);
    }


  }

  return (
    <div><main>
      <div class="container">

        <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                <div class="card mb-3">

                  <div class="card-body">

                    <div class="pt-4 pb-2">
                      <h5 class="card-title text-center pb-0 fs-4">Login</h5>
                      <p class="text-center small">Enter your username & password to login</p>
                    </div>

                    <form class="row g-3 needs-validation" novalidate action='POST'>

                      <div class="col-12">
                        <label for="yourUsername" class="form-label">Username</label>
                        <div class="input-group has-validation">
                          <input
                            type="text"
                            name="username"
                            onChange={(e) => { setUsername(e.target.value) }}
                            class="form-control"
                            id="yourUsername"
                          />
                          <div class="invalid-feedback">Please enter your username.</div>
                        </div>
                      </div>

                      <div class="col-12">
                        <label for="yourPassword" class="form-label">Password</label>
                        <input
                          type="password"
                          name="password"
                          onChange={(e) => { setPassword(e.target.value) }}
                          class="form-control"
                          id="yourPassword"
                        />
                        <div class="invalid-feedback">Please enter your password!</div>
                      </div>

                      <div class="col-12">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                          <label class="form-check-label" for="rememberMe">Remember me</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <Link to={'/'} style={{ textdecoration: 'none' }}><button class="btn btn-primary w-100" type="submit" onClick={submit}>Login</button></Link>
                      </div>
                      <div class="col-12">
                        <p class="small mb-0">Don't have account?
                          <Link to={'/register'}>Create an account</Link>
                        </p>
                      </div>
                    </form>

                  </div>
                </div>


              </div>
            </div>
          </div>

        </section>

      </div>
    </main></div>
  )
}

export default Login