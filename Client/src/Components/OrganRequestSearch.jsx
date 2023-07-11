import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderOfDetail from "./HeaderOfDetail";
import DonorDetails from "./DonorDetails";
import RecipientDetails from "./RecipientDetails";
import HospitalDetails from "./HospitalDetails";

function OrganRequestSearch(){
  const [refNum, setRefNum] =useState("");
  const [eventDone, setEventDone] = useState("");
  const [data, setData] = useState({});
  const [donor, setDonor] = useState([]);
  const [recipient, setRecipient] = useState([]);
  const [hospital, setHospital] = useState([]);
  const [donorId, setDonorId] = useState("");
  const [recipientId, setRecipientId] = useState("");
  const [hospitalId, setHospitalId] = useState("");
  const [dataVisible, setDataVisible]=useState(false);
  let value;
  const handleChange = (event) => {
    value = event.target.value;
    setRefNum(value);
    };
    const PostData = (event) => { 
      event.preventDefault();     
        axios
          .get("/OrganRequest/"+refNum)
          .then((response) => {
            setData(response.data);
            setEventDone("submitSearch");
            console.warn(response.data);
            console.warn(response.data.donor_id);
            setDonorId(response.data.donor_id);
            setRecipientId(response.data.recipient_id);
            setHospitalId(response.data.hospital_id);
          })
          .catch((error) => {
            console.log(error);
          });
        }
    function getData(){
      setDataVisible(true);
        axios
          .get("/donor/"+donorId)
          .then((response) => {
            setDonor(response.data);
          })
          .catch((error) => {
            console.log(error);
            window.alert("Data not found.")
          });
        axios
          .get("/Recipient/"+recipientId)
          .then((response) => {
            setRecipient(response.data);
          })
          .catch((error) => {
            console.log(error);
            window.alert("Data not found.");
          });
        axios
          .get("/Hospital/"+hospitalId)
          .then((response) => {
            setHospital(response.data);
          })
          .catch((error) => {
            console.log(error);
            window.alert("Data not found.");
          });
      };
  function handleGetDataClick()
  {
    axios
      .get("/donor/"+donorId)
      .then((response) => {
        setDonor(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      axios
      .get("/Recipient/"+recipientId)
      .then((response) => {
        setRecipient(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      axios
      .get("/Hospital/"+hospitalId)
      .then((response) => {
        setHospital(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
 return(
  <div>
  {(eventDone==="")?  
    (<div>
    
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
          <a href="/OrganRequestadd" class="nav-item nav-link">
            Add Organ Request
          </a>
          <a href="/profilepage" class="nav-item nav-link">
            Profile
          </a>
          
        </div>
      </div>
    </nav>
    {/* Navbar End */}

    <h4 style={{textAlign:"center"}} class="text-primary p-4">Enter your Organ Requests reference number to get details</h4>
      <form 
      method="POST">
      <div class="row g-3 m-3">
      <div class="col-8 m-auto">
      <div class="row">
          <label class="col-sm-3 col-2 ps-3 py-3 px-2">Reference Id * :</label>
          <div class="col-sm-9 col-10 ">
          <input
              type="text"
              id="refNum"
              name="refNum"
              //value=""
              class="form-control border-0"
              placeholder="Reference Id"
              style={{ height: "55px" }}
              onChange={handleChange}
              required
          />
          </div>
          </div>
          <div class="col-4"></div>
          <div class="col-4 ms-auto" style={{textAlign:"center"}}>
          <button 
            class="btn btn-primary w-100 py-3 m-3" 
            type="submit"
            onClick={PostData}
          >
              Search
          </button>

          </div>
          </div>
      </div>
      </form>
    
    </div>):null} 
    {/* search result Request Details */}
{(eventDone==="submitSearch")?
    (<div>
        

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
<a href="/" class="navbar-brand d-flex align-items-center px-4 px-lg-5 ">
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
    <a href="OrganRequestadd" class="nav-item nav-link" >
      Add Organ Request
    </a>
    <a href="OrganRequestSearch" class="nav-item nav-link" >
    Search Organ Request
    </a>
    <a href="/profilepage" class="nav-item nav-link">
      Profile
    </a>
    
  </div>
</div>
</nav>
{/* Navbar End */}
        <div class="row ms-auto">
        <button 
            onClick={getData}
            name="next"
            class="col-md-2 col-sm-3 col-4 btn btn-primary ms-auto mx-5">   
        See Data &nbsp;&nbsp; 
        {dataVisible?(<i class="fa-solid fa-eye"></i>):(<i class="fa-solid fa-eye-slash"></i>)}
        </button>
        </div>
        
        <DonorDetails
          id={donor._id}
          full_name={donor.full_name}
          email={donor.email}
          phone_number={donor.phone_number}
          address={donor.address}
          age={donor.age}
          blood_group={donor.blood_group}
          organ_type={donor.organ_type}
          status={donor.status}
        ></DonorDetails>
        <RecipientDetails
          id={recipient._id}
          full_name={recipient.full_name}
          email={recipient.email}
          phone_number={recipient.phone_number}
          address={recipient.address}
          age={recipient.age}
          blood_group={recipient.blood_group}
          organ_type={recipient.organ_type}
          status={recipient.status}
        ></RecipientDetails>
        <HospitalDetails
        id={hospital._id}
        full_name={hospital.full_name}
        email={hospital.email}
        phone_number={hospital.phone_number}
        address={hospital.address}
        age={hospital.age}
        blood_group={hospital.blood_group}
        organ_type={hospital.organ_type}
        status={hospital.status}
        ></HospitalDetails>
    </div>):null}

    </div>     
);
}
export default OrganRequestSearch;