import react from "react";
function HeaderOfDetail(props)
{return(<div>
    
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
    <a href={"/"+props.name+"add"} class="nav-item nav-link" >
      Add {props.name}
    </a>
    <a href={"/"+props.name+"list"} class="nav-item nav-link" >
      {props.name} List
    </a>
    <a href="/profilepage" class="nav-item nav-link">
      Profile
    </a>
    
  </div>
</div>
</nav>
{/* Navbar End */}
</div>);}

export default HeaderOfDetail;