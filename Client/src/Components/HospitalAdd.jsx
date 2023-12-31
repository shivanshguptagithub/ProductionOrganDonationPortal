import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function HospitalAdd(){
  const navigate = useNavigate();
  const [user, setUser] = useState({
    full_name:"", email:"", phone_number:"", address:"",status:""
  });
  let name, value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({...user, [name]: value});
    };

  const PostData=async (event)=>{
    event.preventDefault();
    const {full_name, email, phone_number, address,  status}= user;
    const res= await fetch("/Hospitaladd",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        full_name, email, phone_number, address,  status
      })
    })
    if(res.ok){
      //window.location.reload();
      window.alert("Data saved successfully.");
      navigate('/Hospitallist');
    }
    else{
      window.alert("Please enter data correctly in all the fields.");
    }
    }

 return(<div>

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
          <a href="/HospitalList" class="nav-item nav-link">
            Hospital List
          </a>
          <a href="/profilepage" class="nav-item nav-link">
            Profile
          </a>
         
        </div>
      </div>
    </nav>
    {/* Navbar End */}
    {/*form start*/}
        <div class="container-xxl py-3" id="contact">
            <div class="container">
            <div class="row g-5" >
                
                <div
                class="col-lg-8 col-12 p-1 wow fadeInUp"
                data-wow-delay="0.5s"
                style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp",
                }}
                >
               <h3 class="text-primary p-4">Enter Hospital Information</h3>
                {/* Pills navs*/}
                <div className="bg-light rounded h-100 d-flex align-items-center p-5 py-1">
                    {/* <!-- <div class="form-outline mb-4">
                                <input type="text" id="registerName" class="form-control" />
                                <label class="form-label" for="registerName">Name</label>
                                </div>
                        --> */}
                    <form 
                     method="POST"
                     onSubmit={PostData}>
                    <div class="row g-3">
                        <label class="col-sm-2 col-3 ps-3 py-3 px-2" for="name">Name * :</label>
                        <div class="col-sm-10 col-9">
                        <input
                            type="text"
                            id="name"
                            name="full_name"
                            value={user.full_name}
                            class="form-control border-0"
                            placeholder="Name"
                            style={{ height: "55px" }}
                            onChange={handleChange}
                            required
                        />
                        </div>
                        <label class="col-sm-2 col-3 ps-3 py-3 px-2" for="email">Email * :</label>
                        <div class="col-sm-10 col-9">
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={user.email}
                            class="form-control border-0"
                            placeholder="Email"
                            style={{ height: "55px" }}
                            onChange={handleChange}
                            required
                        />
                        </div>
                        <label class="col-sm-2 col-3 ps-3 py-3 px-2" for="phone">Phone * :</label>
                        <div class="col-sm-10 col-9">
                        <input
                            type="text"
                            id="phone"
                            name="phone_number"
                            value={user.phone_number}
                            class="form-control border-0"
                            placeholder="Phone"
                            style={{ height: "55px" }}
                            onChange={handleChange}
                            minLength={10}
                            maxLength={10}
                            required
                        />
                        </div>
                        <label class="col-sm-2 col-3 ps-3 py-3 px-2" for="address">Address * :</label>
                        <div class="col-sm-10 col-9">
                        <textarea 
                            id="address"
                            name="address"
                            value={user.address}
                            class="form-control border-0"
                            placeholder="Address"
                            style={{ height: "100px" }}
                            onChange={handleChange}
                            required
                        />
                        </div>
                        <label class="col-sm-2 col-3 ps-3 py-3 px-2" for="status">Status * :</label>
                        <div class="col-sm-10 col-9">
                        <input
                            type="text"
                            id="status"
                            name="status"
                            value={user.status}
                            class="form-control border-0"
                            placeholder="Status"
                            style={{ height: "55px" }}
                            onChange={handleChange}
                            required
                        />
                        </div>
                        <div class="col-4"></div>
                        <div class="col-4" style={{textAlign:"center"}}>
                        <button 
                          class="btn btn-primary w-100 py-3" 
                          type="submit"
                          >
                            Submit
                        </button>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
                <div class="col-lg-4 col-md-3 col-0"></div>
            </div>
            </div>
        </div>
    {/*form end*/}
   
    </div>


      
);
}
export default HospitalAdd;