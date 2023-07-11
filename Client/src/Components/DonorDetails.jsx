import react from "react";
import DetailsPageEditButton from "./DetailsPageEditButton"
function DonorDetails(props){
return(<div>

    <h3 style={{textAlign:"center"}} class="text-primary p-4">Donor {props.full_name}</h3>
   
   <div class="container p-3" style={{border:"3px solid #0463FA", borderRadius:"18px"}}>
      <div class="row">
        <div class="col-lg-6 col-12">
        <div class="row">
          <div class="col-3 p-2" style={{backgroundColor: "#dbe9ff"}}>
          Name &nbsp;&nbsp;&nbsp;&nbsp; - </div>
          <div class="col-9 p-2" style={{backgroundColor: "#dbe9ff"}} >{props.full_name}</div>
          <div class="col-3 p-2">Email  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - </div>
          <div class="col-9 p-2">{props.email}</div>
          <div class="col-3 p-2" style={{backgroundColor: "#dbe9ff"}} >Phone  &nbsp;&nbsp;&nbsp; - </div>
          <div class="col-9 p-2" style={{backgroundColor: "#dbe9ff"}} >{props.phone_number}</div>
          <div class="col-3 p-2">Address &nbsp;-</div>
          <div class="col-9 p-2">{props.address}</div>
        </div>
        </div>  
        <div class="col-lg-6 col-12">
          <div class="row"  >
          <div class="col-3 p-2" style={{backgroundColor: "#dbe9ff"}}>Age &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</div>
          <div class="col-9 p-2" style={{backgroundColor: "#dbe9ff"}}>{props.age}</div>
          <div class="col-3 p-2">Blood Group&nbsp;&nbsp;-</div>
          <div class="col-9 p-2">{props.blood_group}</div>
          <div class="col-3 p-2" style={{backgroundColor: "#dbe9ff"}}>Organ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</div>
          <div class="col-9 p-2" style={{backgroundColor: "#dbe9ff"}}>{props.organ_type}</div>
          <div class="col-3 p-2">Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</div>
          <div class="col-9 p-2">{props.status}</div>
        </div>

        </div>
      </div>
      
      </div>
    </div>);
}
export default DonorDetails;
