import react from "react";

function Topbar(){
    return(
      <div
      className="container-fluid bg-light p-0 wow fadeIn"
      data-wow-delay="0.1s"
      style={{
        visibility: "visible",
        animationDelay: "0.1s",
        animationName: "fadeIn",
      }}>
      <div class="row gx-0 d-none d-lg-flex">
        <div class="col-lg-7 px-5 text-start"></div>
        <div class="col-lg-5 px-5 text-end">
          <div class="h-100 d-inline-flex align-items-center py-3 me-4">
            <small class="fa fa-phone-alt text-primary me-2"></small>
            <small>+91 98748 48377</small>
          </div>
          <div class="h-100 d-inline-flex align-items-center">
            <a
              class="btn btn-sm-square rounded-circle bg-white text-primary me-1"
              target="_blank"
              href="https://facebook.com"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              class="btn btn-sm-square rounded-circle bg-white text-primary me-1"
              target="_blank"
              href="https://twitter.com"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              class="btn btn-sm-square rounded-circle bg-white text-primary me-1"
              target="_blank"
              href="https://linkedin.com"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a
              class="btn btn-sm-square rounded-circle bg-white text-primary me-0"
              target="_blank"
              href="https://instagram.com"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>)
}

export default Topbar;