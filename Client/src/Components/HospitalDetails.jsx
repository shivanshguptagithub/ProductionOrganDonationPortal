import react from "react";
function HospitalDetails(props){
return(<div>

    <h3 style={{textAlign:"center"}} class="text-primary p-4">Hospital {props.full_name}</h3>
   
   <div class="container p-3 mb-3" style={{border:"3px solid #0463FA", borderRadius:"18px"}}>
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
          
        </div>
        </div>  
        <div class="col-lg-6 col-12">
          <div class="row"  >
          <div class="col-3 p-2" style={{backgroundColor: "#dbe9ff"}}>Address &nbsp;&nbsp;&nbsp;&nbsp;-</div>
          <div class="col-9 p-2" style={{backgroundColor: "#dbe9ff"}}>{props.address}</div>
          <div class="col-3 p-2">Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</div>
          <div class="col-9 p-2">{props.status}</div>
          <div class="col-3 p-2" style={{backgroundColor: "#dbe9ff"}}>.</div>
          <div class="col-9 p-2" style={{backgroundColor: "#dbe9ff"}}></div>
        </div>
        </div>
      </div>
   </div>
  </div>);
}
export default HospitalDetails;