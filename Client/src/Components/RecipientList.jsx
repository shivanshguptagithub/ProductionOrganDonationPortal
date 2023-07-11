import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function RecipientList(){

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/Recipientlist")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function onDeleteClick(id){
    
    (window.confirm("Do you want to delete it?")===true)?(navigate("/recipientdelete/"+id)):(navigate("/recipientlist"))
    
  }

 return(
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

    <h3 style={{textAlign:"center"}} class="text-primary p-4">Recipients Available</h3>
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
          <td class="px-0"><strong>Details</strong></td>
          <td class="px-0"><strong>Edit</strong></td>
          <td class="px-0"><strong>Delete</strong></td>
        </tr>
      </thead>
      <tbody>
      {data.map(x=>
      <tr>
        <td>{x.full_name}</td>
        <td>{x.email}</td>
        <td>{x.phone_number}</td>
        <td>{x.address}</td>
        <td>{x.age}</td>
        <td>{x.blood_group}</td>
        <td>{x.organ_type}</td>
        <td>{x.status}</td>
        
        <td><a href={"/recipientdata/"+x._id}><i class="fa-solid fa-circle-info"></i></a></td>
        <td><a href={"/recipientedit/"+x._id}><i class="fa-solid fa-pen-to-square"></i></a></td>
        <td><button 
          onClick={()=>onDeleteClick(x._id)}
          style={{
            border:"0px",
            color:"#0463FA",
            background:"transparent"
          }}
          ><i class="fa-solid fa-trash"></i></button></td>
        {/* <td><a href={"/recipientdelete/"+x._id}><i class="fa-solid fa-trash"></i></a></td> */}
        
      </tr> )}    
      </tbody>
    </table>
    </div>
    </div>


      
);
}
export default RecipientList;