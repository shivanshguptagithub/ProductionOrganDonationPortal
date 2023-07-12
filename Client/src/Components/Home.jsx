import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
//import 'jquery/dist/jquery.min.js'; // Have to install and import jQuery because of bootstrap modal's dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    axios.get('/api/authenticated').then((res) => {
      if(res.status===200)
      {
        setAuthenticated(true);
      }
      
    });
  }, []);

  const navigate = useNavigate();
  const [user, setUser] = useState({
    full_name:"",email:"",phone_number:"",message:""
  });
  let name, value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({...user, [name]: value});
    };

  const PostData=async (event)=>{
    event.preventDefault();
    const {full_name,email,phone_number,message}= user;
    const res= await fetch("/contactus",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        full_name,email,phone_number,message
      })
    })
    
    if(res.ok){
      window.alert("Your request is successfully accepted.");
      window.location.reload();
    }
    else{
      window.alert("Please enter data correctly in all the fields.");
      window.location.reload();
    }
  }


  return (
    <div>
    
      {/* Navbar Start */}
      <div className="sticky-top">
      <nav
        className="navbar navbar-expand-lg bg-white navbar-light p-0 wow fadeIn sticky-top"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeIn",
          //top: "-100px",
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
          <span class="navbar-toggler-icon me-auto"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/" class="nav-item nav-link active">
              Home
            </a>
            <a href="#aboutus" class="nav-item nav-link">
              About
            </a>
            <a href="#services" class="nav-item nav-link">
              Services
            </a>
            <a href="#contact" class="nav-item nav-link">
              Contact
            </a>
            {authenticated?(
              <a href="/profilepage" class="nav-item nav-link">
              Profile
              </a>

            ):(<>
              <a href="login" class="nav-item nav-link ">
                Login
              </a>
              <a href="register" class="nav-item nav-link ">
                Register
              </a>
              </>
            )}
          </div>
        </div>
      </nav>
      </div>
      {/* Navbar End */}

      <div class="container-fluid header bg-primary p-0 mb-5 m-auto h-100">
        <div class="row g-0 align-items-center flex-column flex-sm-row flex-row p-0">
          <div
            class="col-lg-12 p-5 wow fadeIn"
            dataWowDelay="0.1s"
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeIn",
            }}
          >
            <h1 class="display-4 text-white mb-5">
              Give life, give hope: Be an organ donor today
            </h1>
            <div class="row g-4 pt-3">
              <div class="col-sm-4">
                <div class="border-start border-light ps-4">
                  <h2 class="text-white mb-1" data-toggle="counter-up">
                    738
                  </h2>
                  <p class="text-light mb-0">Organ Donated</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="border-start border-light ps-4">
                  <h2 class="text-white mb-1" data-toggle="counter-up">
                    3263
                  </h2>
                  <p class="text-light mb-0">Organ Required</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="border-start border-light ps-4">
                  <h2 class="text-white mb-1" data-toggle="counter-up">
                    623
                  </h2>
                  <p class="text-light mb-0">Life Saved</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row p-0">
            <div
              class="col-6 wow fadeIn"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "2s",
                animationName: "fadeIn",
              }}
            >
              <div class="row">
                <a
                  href={authenticated?("/profilepage"):("/login")}
                  style={{ backgroundColor: "white", color: "#0463FA" }}
                  class="col-12 btn btn-primary rounded-0 py-4 px-lg-5 d-lg-block"
                >
                  Receive<i class="fa fa-arrow-right ms-3"></i>
                </a>
              </div>
            </div>
            <div
              class="col-6 wow fadeIn"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeIn",
              }}
            >
              <div class="row">
                <a
                  href={authenticated?("/profilepage"):("/login")}
                  style={{ backgroundColor: "#0257e1" 
                           , paddingRight:"100px" }}
                  class="col-12 btn btn-primary rounded-0 py-4 px-4 px-lg-5 w-100 d-lg-block"
                >
                  Donate<i class="fa fa-arrow-right ms-3"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Start */}
      <div class="container-xxl py-5" id="aboutus">
        <div class="container">
          <div class="row g-5">
            <div
              class="col-lg-6 wow fadeIn"
              data-wow-delay="0const 1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeIn",
              }}
            >
              <div class="d-flex flex-column">
                <img
                  class="img-fluid rounded w-100 align-self-end"
                  src="https://e0.pxfuel.com/wallpapers/10/159/desktop-wallpaper-a-new-teenage-cause-organ-donation-opinion.jpg"
                  alt="organ donation image"
                />
              </div>
            </div>
            <div
              class="col-lg-6 wow fadeIn"
              data-wow-delay="0const 5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeIn",
              }}
            >
              <p class="d-inline-block border rounded-pill py-1 px-4">
                About Us
              </p>
              <h1 class="mb-4">What we do? Why we do?</h1>
              <p>
                Welcome to our Organ Donation Portal! We are a team of dedicated
                professionals committed to making a positive impact on society.
                Our aim is to connect donors and recipients seamlessly,
                providing them with a platform to come together for the greater
                good. We strive to create awareness about the importance of
                organ donation and work towards eliminating misconceptions and
                stigmas associated with the process. With a focus on
                transparency and accountability, we ensure that every donation
                and transplantation is carried out ethically and efficiently.
                Join us in our mission to save lives and make a difference in
                the world!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Service Start */}
      <div class="container-xxl py-5" id="services">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0const 1s"
            style={{
              maxWidth: "600px",
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeInUp",
            }}
          >
            <p class="d-inline-block border rounded-pill py-1 px-4">Services</p>
            <h1>Organ Donation Solutions</h1>
          </div>
          <div class="row g-4">
            <div
              class="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0const 1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeInUp",
              }}
            >
              <div class="service-item bg-light rounded h-100 p-5">
                <div
                  class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <i class="fa fa-light fa-hand-holding-medical text-primary fs-4"></i>
                </div>
                <h4 class="mb-3">Donate Organ</h4>
                <p class="mb-4">
                  Donor can donate organ on this protal. Medical records is also
                  verified.
                </p>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0const 3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              <div class="service-item bg-light rounded h-100 p-5">
                <div
                  class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <i class="fa fa-solid fa-magnifying-glass text-primary fs-4"></i>
                </div>
                <h4 class="mb-3">Find recepients</h4>
                <p class="mb-4">
                  Receiver can search for organ and find their donor.
                </p>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-12 wow fadeInUp"
              data-wow-delay="0const 5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <div class="service-item bg-light rounded h-100 p-5">
                <div
                  class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <i class="fa fa-solid fa-magnifying-glass text-primary fs-4"></i>
                </div>
                <h4 class="mb-3">Find Donar</h4>
                <p class="mb-4">
                  Donor can donate organ and find their recepients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Donate Start */}
      <div class="container-xxl py-5" id="contact">
        <div class="container">
          <div class="row g-5">
            <div
              class="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeInUp",
              }}
            >
              <p class="d-inline-block border rounded-pill py-1 px-4">Donate</p>
              <h1 class="mb-4">
                Give life, give hope: Be an organ donor today
              </h1>
              <a href="tel:+91 98345 6789">
              <div class="bg-light rounded d-flex align-items-center p-sm-5 py-5 p-0 mb-4">
                <div
                  class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                  style={{ width: "55px", height: "55px" }}
                >
                  <i class="fa fa-phone-alt text-primary"></i>
                </div>
                <div class="ms-sm-5 ms-1">
                  <p class="mb-2">Call Us Now</p>
                  <h5 class="mb-0">+91 98345 67899</h5>
                </div>
              </div>
              </a>
              <a href="mailto:organdonation@gmail.com">
              <div class="bg-light rounded d-flex align-items-center p-sm-5 py-5 p-0">
                <div
                  class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                  style={{ width: "55px", height: "55px" }}
                >
                  <i class="fa fa-envelope-open text-primary"></i>
                </div>
                <div class="ms-sm-5 ms-1">
                  <p class="mb-2">Mail Us Now</p>
                  <h5 class="mb-0">organdonation@gmail.com</h5>
                </div>
              </div>
              </a>
            </div>
            <div
              class="col-lg-6 wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <div class="bg-light rounded h-100 d-flex align-items-center p-5">
                <form
                  onSubmit={PostData}>
                  <div class="row g-3">
                    <div class="col-12 col-sm-6">
                      <input
                        type="text"
                        id="full_name"
                        name="full_name"
                        class="form-control border-0"
                        placeholder="Your Name"
                        style={{ height: "55px" }}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div class="col-12 col-sm-6">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        class="form-control border-0"
                        placeholder="Your Email"
                        style={{ height: "55px" }}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div class="col-12 col-sm-12">
                      <input
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        class="form-control border-0"
                        placeholder="Your Mobile"
                        style={{ height: "55px" }}
                        onChange={handleChange}
                        minLength={10}
                        maxLength={10}
                        required
                      />
                    </div>

                    <div class="col-12">
                      <textarea
                        class="form-control border-0"
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Write your message"
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div class="col-12">
                      <button 
                        class="btn btn-primary w-100 py-3" 
                        type="submit"
                        >
                        Contact Us
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Donate End */}

      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeIn",
        }}
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <h5 className="text-light mb-4">Address</h5>
              <p className="mb-2">
              <a 
                href="https://goo.gl/maps/1ot2ogKC9eEXaLHr8"
                className="p-0"
                style={{
                  color:"white",
                }}>
              
                <i className="fa fa-map-marker-alt me-3"></i>India
                </a>
              </p>
              <p className="mb-2">
              <a 
                href="tel:+91 98345 67890"
                className="p-0 "
                style={{
                  color:"white",
                }}>
                <i className="fa fa-phone-alt me-3"></i>+91 98345 67890
              </a>
              </p>
              <p className="mb-2">
              <a 
                href="mailto:organdonation@gmail.com"
                className="p-0"
                style={{
                  color:"white",
                  textTransform: "lowercase",
                }}>
                <i className="fa fa-envelope me-3"></i>
                organdonation@gmail.com
              </a>
              </p>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-outline-light btn-social rounded-circle"
                  href="https://twitter.com"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-social rounded-circle"
                  href="https://facebook.com"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-social rounded-circle"
                  href="https://youtube.com"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-social rounded-circle"
                  href="https://linkedin.com"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-light mb-4">Services</h5>
              <a className="btn btn-link" href="">
                Donate Organ
              </a>
              <a className="btn btn-link" href="">
                Find Donor
              </a>
              <a className="btn btn-link" href="">
                FInd recepient
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-light mb-4">Quick Links</h5>
              <a className="btn btn-link" href="#aboutus">
                About Us
              </a>
              <a className="btn btn-link" href="#contact">
                Contact Us
              </a>
              <a className="btn btn-link" href="#services">
                Our Services
              </a>
            </div>
            {/* Footer End */}

            {/* Back to Top*/}
            <a
              href="#"
              class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
              style={{ display: "none" }}
            >
              <i class="bi bi-arrow-up"></i>
            </a>

            {/* JavaScript Libraries *}/
    <script src="./Organ Donation Portal_files/jquery-3.4.1.min.js.download"></script>
    <script src="./Organ Donation Portal_files/bootstrap.bundle.min.js.download"></script>
    <script src="./Organ Donation Portal_files/wow.min.js.download"></script>
    <script src="./Organ Donation Portal_files/easing.min.js.download"></script>
    <script src="./Organ Donation Portal_files/waypoints.min.js.download"></script>
    <script src="./Organ Donation Portal_files/counterup.min.js.download"></script>
    <script src="./Organ Donation Portal_files/owl.carousel.min.js.download"></script>
    <script src="./Organ Donation Portal_files/moment.min.js.download"></script>
    <script src="./Organ Donation Portal_files/moment-timezone.min.js.download"></script>
    <script src="./Organ Donation Portal_files/tempusdominus-bootstrap-4.min.js.download">

    </script>

    {/* Template Javascript */}
            <script src="./Organ Donation Portal_files/main.js.download"></script>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
