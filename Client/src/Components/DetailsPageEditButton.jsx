import react from "react";
function DetailsPageEditButton(props){
return(
  <div class="row">
        <div class="col-2 ms-auto m-5 mt-3 p-3">
          <a 
            href={"/"+props.name+"edit/"+props.id}
            class="btn btn-primary w-100 py-3" 
          > Edit
          </a>
        </div>
      </div>);
}
export default DetailsPageEditButton;