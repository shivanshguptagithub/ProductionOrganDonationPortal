import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username:"", password:""
  });
  let name, value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({...user, [name]: value});
    };

  const PostData=async (event)=>{
    event.preventDefault();
    const {username, password}= user;
    const res= await fetch("/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        username, password
      })
    })
    
    if(res.ok){
      //window.location.reload();
      navigate('/ProfilePage');
    }
    else{
      window.alert("Please enter username and password correctly.");
      window.location.reload();
    }
  }

  return (
    <div>
      
      {/* Navbar Start */}
      <nav
        class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeIn",
          top: "-100px",
        }}
      >
        <a href="/" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <h1 class="m-0 text-primary">
            <i class="fa-solid fa-hand-holding-medical"></i> Organ Donation
            Portal
          </h1>
        </a>
        <button
          type="button"
          class="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/" class="nav-item nav-link">
              Home
            </a>
            <a href="login" class="nav-item nav-link  active">
              Login
            </a>
            <a href="register" class="nav-item nav-link ">
              Register
            </a>
          </div>
        </div>
      </nav>
      {/* Navbar End*/}
      {/* Login Start */}
      <div class="container-xxl py-1" id="contact">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-4 col-md-3 col-0"></div>
            <div
              class="col-lg-4 col-md-6 col-12 p-3 wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              {/* Pills navs */}
              <ul
                class="nav nav-pills nav-justified mb-3"
                id="ex1"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    id="tab-login"
                    data-mdb-toggle="pill"
                    href="login"
                    role="tab"
                    aria-controls="pills-login"
                    aria-selected="true"
                  >
                    Login
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="tab-register"
                    data-mdb-toggle="pill"
                    href="register"
                    role="tab"
                    aria-controls="pills-register"
                    aria-selected="false"
                  >
                    Register
                  </a>
                </li>
              </ul>
              {/* Pills navs */}
              <div class="bg-light rounded h-100 d-flex align-items-center p-5">
                <form>
                  <div class="row g-3">
                    <div class="col-12">
                      <input
                        type="text"
                        id="username"
                        name="username"
                        class="form-control border-0"
                        placeholder="Username"
                        style={{ height: "55px" }}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-12">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        class="form-control border-0"
                        placeholder="Password"
                        style={{ height: "55px" }}
                        onChange={handleChange}
                      />
                    </div>

                    <div class="col-12">
                      <button 
                        class="btn btn-primary w-100 py-3" 
                        type="submit"
                        onClick={PostData}>
                        Login
                      </button>
                    </div>
                  </div>
                  <div class="text-center pt-5">
                    <p>
                      Not a user? <a href="register">Register</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-4 col-md-3 col-0"></div>
          </div>
        </div>
      </div>

      {/* JavaScript Libraries */}
      <script src="./Organ Donation Portal_files/jquery-3.4.1.min.js.download"></script>
      <script src="./Organ Donation Portal_files/bootstrap.bundle.min.js.download"></script>
      <script src="./Organ Donation Portal_files/wow.min.js.download"></script>
      <script src="./Organ Donation Portal_files/easing.min.js.download"></script>
      <script src="./Organ Donation Portal_files/waypoints.min.js.download"></script>
      <script src="./Organ Donation Portal_files/counterup.min.js.download"></script>
      <script src="./Organ Donation Portal_files/owl.carousel.min.js.download"></script>
      <script src="./Organ Donation Portal_files/moment.min.js.download"></script>
      <script src="./Organ Donation Portal_files/moment-timezone.min.js.download"></script>
      <script src="./Organ Donation Portal_files/tempusdominus-bootstrap-4.min.js.download"></script>

      {/*Template Javascript*/}
      <script src="./Organ Donation Portal_files/main.js.download"></script>
    </div>
  );
}
export default Login;
