import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function Profile() {
    const navigate = useNavigate();
    async function handle(event){
        event.preventDefault();
        const res= await fetch("/logout",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
        })
        
        if(res.ok){
        //window.location.reload();
        navigate('/');
        }
        else{
        window.location.reload();
        }
    }
  return (
    <div>
      
      {/* Navbar */}
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
            <button 
                onClick={handle} 
                class="nav-item nav-link me-auto"
                style={{border:"0px", backgroundColor:"white"}}>Logout</button>
          </div>
        </div>
      </nav>
      {/* Navbar */}
      {/* main */}
      <div class="row pt-sm-5 pt-0 mt-5 px-4">
      <div class="col-lg-2 col-sm-4 ms-auto p-2">
        <a 
        href="/donoradd"
        class="btn btn-primary w-100 py-3"
        width="20px" 
        >Add Donor
        </a>
      </div>
      <div class="col-lg-2 col-sm-4 ms-auto p-2">
        <a 
        href="/donorlist"
        class="btn btn-primary w-100 py-3" 
        >Donor List
        </a>
      </div>
      <div class="col-lg-2 col-sm-4 ms-auto  p-2">
        <a 
        href="/Recipientadd"
        class="btn btn-primary w-100 py-3" 
        >Add Recipient
        </a>
      </div>
      <div class="col-lg-2 col-sm-4 ms-auto  p-2">
        <a 
        href="/Recipientlist"
        class="btn btn-primary w-100 py-3" 
        >Recipient List
        </a>
      </div>
      <div class="col-lg-2 col-sm-4 ms-auto  p-2">
        <a 
        href="/HospitalAdd"
        class="btn btn-primary w-100 py-3" 
        >Add Hospital
        </a>
      </div>
      <div class="col-lg-2 col-sm-4 ms-auto p-2">
        <a 
        href="/HospitalList"
        class="btn btn-primary w-100 py-3" 
        >Hospital List
        </a>
      </div>
      </div>
      <div class="row  px-4">
      <div class="col-lg-2 col-sm-4 ms-auto p-2">
        <a 
        href="/OrganRequestAdd"
        class="btn btn-primary w-100 py-3" 
        >Create Organ Request
        </a>
      </div>
      <div class="col-lg-2 col-sm-4 me-auto p-2">
        <a 
        href="/OrganRequestSearch"
        class="btn btn-primary w-100 py-3" 
        >Serach Organ Request
        </a>
      </div>
      </div>
      {/* JavaScript Libraries*/}
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
export default Profile;
