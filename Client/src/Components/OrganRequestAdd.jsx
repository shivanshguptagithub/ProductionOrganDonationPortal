import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import DonorDetails from "./DonorDetails";
import RecipientDetails from "./RecipientDetails";
import HospitalDetails from "./HospitalDetails";
import HeaderOfDetail from "./HeaderOfDetail";
import { useNavigate } from 'react-router-dom';

function OrganRequestAdd(){
  const [donorData, setDonorData]  =useState([]);
  const [recipientData, setRecipientData]  =useState([]);
  const [hospitalData, setHospitalData]  =useState([]);
  const [eventDone, setEventDone] = useState("");
  const [donorId, setDonorId] = useState("");
  const [recipientId, setRecipientId] = useState("");
  const [hospitalId, setHospitalId] = useState("");
  const [donor, setDonor] = useState({});
  const [recepient, setRecipient] = useState({});
  const [hospital, setHospital] = useState({});
  //const [allowAxios,setAllowAxios]=useState(false)
  const [savedItemId,setSavedItemId] =useState("");
  const[ShowContinue,setShowContinue]=useState("");
  
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/donorslist")
      .then((response) => {
        setDonorData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("/Recipientslist")
      .then((response) => {
        setRecipientData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("/Hospitalslist")
      .then((response) => {
        setHospitalData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
 
  function handleDonorClick(event){
    const {name, value}=event.target;
    setDonorId(value);
    setEventDone("donor");
    console.log(name, value);
  }
  function handleRecipientClick(event){
    const {name, value}=event.target;
    setRecipientId(value);
    setEventDone("recipient");
    console.log(name, value);
  }
  function handleHospitalClick(event){
    const {name, value}=event.target;
    setHospitalId(value);
    setTimeout(function() {
      setShowContinue("show");
    }, 2000);
    
  } 
  function handleNextClick()
  {
    setEventDone("hospital");
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
  const handleFinalClick=async (event)=>{
//   function handleFinalClick(event){ 
        event.preventDefault();
        //const {full_name, email, phone_number, address, age, blood_group, organ_type, status}= user;
        const donor_id=donorId;
        const recipient_id=recipientId;
        const hospital_id=hospitalId;
        const organ_type= donor.organ_type;
        const status="initial";
        const res=await fetch("/OrganRequestadd",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            donor_id,recipient_id,hospital_id, organ_type, status
          })
        })
        .then(response => response.json())
      .then(data => {
        const savedItemId = data.id;
        setSavedItemId(savedItemId);
        window.alert("Data saved successfully.");
          setEventDone("submit");
      })
      .catch(error => console.error(error));
        if(res.ok){
          //window.location.reload();
          
          //navigate('/OrganRequestlist');
        }
        else{
          window.alert("Please enter data correctly in all the fields.");
        }
        }
 return(

<div>
{/* //donors data */}
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
          <a href="/donoradd" class="nav-item nav-link">
            Add Donor
          </a>
          <a href="/profilepage" class="nav-item nav-link">
            Profile
          </a>
          
        </div>
      </div>
    </nav>
    {/* Navbar End */}

    <h5 style={{textAlign:"center"}} class="text-primary p-4">Donors Available - Choose donor for organ request </h5>
   <div className="table-responsive">
    <table className="table table-striped" style={{color:"black"}}>
      <thead style={{backgroundColor:"#0463FA",color:"white"}}
      className="sticky-top">
        <tr>
          <td><strong>Name</strong></td>
          <td><strong>Email</strong></td>
          <td><strong>Phone</strong></td>
          <td><strong>Address</strong></td>
          <td><strong>Age</strong></td>          
          <td><strong>Blood Group</strong></td> 
          <td><strong>Organ</strong></td>
          <td><strong >Status</strong></td>
          <td class="px-0"><strong>Select</strong></td>
          
        </tr>
      </thead>
      <tbody>
      {donorData.map(x=>
      <tr>
        <td >{x.full_name}</td>
        <td>{x.email}</td>
        <td>{x.phone_number}</td>
        <td>{x.address}</td>
        <td>{x.age}</td>
        <td>{x.blood_group}</td>
        <td>{x.organ_type}</td>
        <td>{x.status}</td>
        <td><button 
                onClick={handleDonorClick}
                name="donor"
                value={x._id}
                class="btn btn-primary px-1 py-0 mx-0">   
            Select <i class="fa-solid fa-square-check"></i>
            </button></td>
        
      </tr> )}    
      </tbody>
    </table>
    </div>
    </div>):null}

{/* Recipients data */}
{(eventDone==="donor")?
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
          <a href="/RecipientAdd" class="nav-item nav-link">
            Add Recipient
          </a>
          <a href="/profilepage" class="nav-item nav-link">
            Profile
          </a>
        </div>
      </div>
    </nav>
    {/* Navbar End */}

    <h5 style={{textAlign:"center"}} class="text-primary p-4">Recipients Available - Choose recepient for organ request</h5>
    <div className="table-responsive">
    <table className="table table-striped" style={{color:"black"}}>
      <thead style={{backgroundColor:"#0463FA",color:"white"}}
      className="sticky-top">
        <tr>
          <td><strong>Name</strong></td>
          <td><strong>Email</strong></td>
          <td><strong>Phone</strong></td>
          <td><strong>Address</strong></td>
          <td><strong>Age</strong></td>          
          <td><strong>Blood Group</strong></td> 
          <td><strong>Organ</strong></td>
          <td><strong>Status</strong></td>
          <td class="px-0"><strong>Select</strong></td>
        </tr>
      </thead>
      <tbody>
      {recipientData.map(x=>
      <tr>
        <td>{x.full_name}</td>
        <td>{x.email}</td>
        <td>{x.phone_number}</td>
        <td>{x.address}</td>
        <td>{x.age}</td>
        <td>{x.blood_group}</td>
        <td>{x.organ_type}</td>
        <td>{x.status}</td>
        <td><button 
                onClick={handleRecipientClick}
                name="recipient"
                value={x._id}
                class="btn btn-primary px-1 py-0 mx-0">   
            Select <i class="fa-solid fa-square-check"></i>
            </button></td>
        
      </tr> )}    
      </tbody>
    </table>
    </div>
    </div>):null}

{/* //Hospitals data */}
{(eventDone==="recipient")?
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
      <a href="/HospitalAdd" class="nav-item nav-link">
        Add Hospital
      </a>
      <a href="/profilepage" class="nav-item nav-link ">
        Profile
      </a>
    </div>
  </div>
</nav>
{/* Navbar End */}

<h5 style={{textAlign:"center"}} class="text-primary p-4">Hospitals Available - Choose hospital for organ request</h5>

<div class="row ms-auto">

        {(ShowContinue==="show")?(<button 
            onClick={handleNextClick}
            name="next"
            class="col-2 btn btn-primary ms-auto mx-5 my-3">   
        Continue
        </button>):null}
        
        </div>
        <div className="table-responsive">
          <table className="table table-striped" style={{color:"black"}}>
            <thead style={{backgroundColor:"#0463FA",color:"white"}}
            className="sticky-top">
              <tr>
                <td><strong>Name</strong></td>
                <td><strong>Email</strong></td>
                <td><strong>Phone</strong></td>
                <td><strong>Address</strong></td>
                <td><strong>Status</strong></td>
                <td class="px-0"><strong>Select</strong></td>

              </tr>
            </thead>
            <tbody>
            {hospitalData.map(x=>
            <tr>
              <td>{x.full_name}</td>
              <td>{x.email}</td>
              <td>{x.phone_number}</td>
              <td>{x.address}</td>
              <td>{x.status}</td>
              
              <td><button 
                          onClick={handleHospitalClick}
                          name="hospital"
                          value={x._id}
                          class="btn btn-primary px-1 py-0 mx-0">   
                      Select <i class="fa-solid fa-square-check"></i>
                      </button></td>
            </tr> )}    
            </tbody>
          </table>
        </div>
        </div>
        ):null}

{/* Request Details */}
{(eventDone==="hospital")?
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
      <a href="/profilepage" class="nav-item nav-link ">
        Profile
      </a>
    </div>
  </div>
</nav>
{/* Navbar End */}

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
          id={recepient._id}
          full_name={recepient.full_name}
          email={recepient.email}
          phone_number={recepient.phone_number}
          address={recepient.address}
          age={recepient.age}
          blood_group={recepient.blood_group}
          organ_type={recepient.organ_type}
          status={recepient.status}
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
        <form method="POST">
        <div class="row ms-auto">
        <button 
            type="submit"
            class=" col-2 btn btn-primary ms-auto m-5"
            onClick={handleFinalClick}>  
        Save
        </button>
        </div>
        </form>
    </div>):null}

{/* Request Details */}
{(eventDone==="submit")?
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
        <h4 style={{textAlign:"center"}} class="text-primary p-5 m-5"> Your reference id is {savedItemId}. Please save it for future reference.</h4>
    </div>):null}
 </div>
);
}
export default OrganRequestAdd;