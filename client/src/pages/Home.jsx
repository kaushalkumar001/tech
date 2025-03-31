import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { NavLink } from 'react-router-dom';

export const Home = () => {
  // Form Reference
  const form = useRef();

  // Email Sending Function 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_euk1hfr", "template_70gf6rc", form.current, {
        publicKey: "xcHzgoyej1rZa-iBq",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Submission Failed. Try again.");
        }
      );
  };

  return (
    <>
      <div className="sabhain">
        {/* Hero Section */}
        <section className="home-image">
          <video autoPlay loop muted playsInline className="background-clip">
            <source src="/images/video1.mp4" type="video/mp4" />
          </video>
          <div className="btn-group">
            <NavLink to="/Contact">
              <button className="btn">Connect Now</button>
            </NavLink>
            <a href="https://sviet.org.in/">
              <button className="secondary-btn">Learn More</button>
            </a>
          </div>
        </section>

        {/* Features Section */}
        <div className="explore">
          <h2>Explore your stay</h2>
        </div>
        <div className="unforget">
          <p>Unforgettable experiences await you</p>
        </div>
        <section>
          <div className="containerthree">
            <div className="box1">
            <img className="handwash"
                    src="/images/handwash.png" 
                    width="300" 
                    height="400"  
                  />

             <div className="box1in">
              <h2 style={{ color: "#FEA700E6", textAlign: "center" }}>Clean Drinking Water</h2>
              <p style={{textAlign: "center" }}>"Clean drinking water ensures students stay healthy, hydrated, and focused on learning."</p>
             </div>
            </div>
            <div className="box2">
            <img className="handwash"
                    src="/images/jim.png" 
                    width="300" 
                    height="400"  
                  />
              <div className="box2in">
                <h2 style={{ color: "#FEA700E6", textAlign: "center"}}>The Hostel Gym</h2>
                <p style={{textAlign: "center" }}>"The Hostel Gym provides a convenient, equipped space for students to stay fit."</p>
              </div>
            </div>
            <div className="box3">
            <img className="handwash"
                    src="/images/washing.png" 
                    width="300" 
                    height="400"  
                  />
              <div className="box3in">
                <h2 style={{ color: "#FEA700E6", textAlign: "center"}}>Hostel Laundry Hub</h2>
                <p style={{textAlign: "center" }}>"Providing convenient and efficient laundry services to ensure cleanliness for all hostel"</p>
              </div>
            </div>
          </div>
        </section>
        <img className="clip"
                    src="/images/clip.png" 
                    width="300" 
                    height="300"  
                  />
        <img className="clip2"
                    src="/images/clip.png" 
                    width="300" 
                    height="300"  
                  />
      <div className="all-hostel">
        <div className="containerboyshostel">
            <div className="box01">
              <div className="box01in">
                <a> 
                <div className="boyshostel01">BOYS HOSTEL
                </div>
                <img src="https://i.ibb.co/zW686hpL/1-E6-F0397-676-B-427-F-B5-C1-C3837-DC8-A1-F8.jpg" height="300px" width="300px" />  </a>
              </div>
            </div>
            <div className="box02">
              <div className="box02in">
              <a>
               <div className="boyshostel02">VIEW
               </div>
              <img src="https://i.ibb.co/sv0MN0HH/26-B1-A4-B1-E258-4142-A52-E-9203369-ECC9-B.jpg" height="300px" width="300px" /></a>
              </div>
            </div>
            <div className="box03">
              <div className="box03in">
               <a>
                  <div className="boyshostel03">CORRIDER</div>
                 <img src="https://i.ibb.co/Ng9LKyp2/76-E50680-D186-4-FC9-9-F91-64-EFE40318-D9.jpg" height="300px" width="300px" />
                </a>
              </div>
            </div>
            <div className="box04">
              <div className="box04in">
              <a>
                <div className="boyshostel04">ROOMS</div>
                <img src="https://i.ibb.co/Y4BKDqQg/IMG-4439.jpg" height="300px" width="300px" />
              </a>
            </div>
          </div>
        </div>

      <div >
          <img src="/images/view.png" height="900" width="1300"  className="between"/>
      </div>
    
          
        <div className="containergirlshostel">
            <div className="box01">
              <div className="box01in">
                <a> 
                <div className="boyshostel01">GIRLS HOSTEL
                </div>
                <img src="https://i.ibb.co/209Trg82/Screenshot-2025-02-12-at-11-07-16-PM.png" height="300px" width="300px" />  </a>
              </div>
            </div>
            <div className="box02">
              <div className="box02in">
              <a>
               <div className="boyshostel02">VIEW
               </div>
              <img src="https://i.ibb.co/7JpvhTV1/A7495-F28-21-B4-4-BDB-B71-A-E68-CAE2102-DF.jpg" height="300px" width="300px" /></a>
              </div>
            </div>
            <div className="box03">
              <div className="box03in">
               <a>
                  <div className="boyshostel03">CORRIDER</div>
                 <img src="https://i.ibb.co/Ng9LKyp2/76-E50680-D186-4-FC9-9-F91-64-EFE40318-D9.jpg" height="300px" width="300px" />
                </a>
              </div>
            </div>
            <div className="box04">
              <div className="box04in">
              <a>
                  <div className="boyshostel04">ROOMS</div>
                  <img src="https://i.ibb.co/FLP0tVDx/Screenshot-2025-02-20-at-11-08-44-AM.png" height="300px" width="300px" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-container">
          <p className="college-line" style={{ backgroundColor: "#021738ed" }}>
            Report Issues, Get Quick Solutions!
            <NavLink to="/Contact">
              <button className="started-btn">Get Started</button>
            </NavLink>
          </p>
        </div>

        {/* Email Form */}
        <div className="hero-container">
          <p className="hostel-line">
            For the true Hostelers
          </p>
        <div className="YourPath"> 
          <h1> Your Path </h1>
          <h1 className="success"> To Success Through SVIET</h1>
        </div>
        </div>

        <section className="formpage">
          <img 
            src="/images/issue.png" 
            width="400" 
            height="400" 
            style={{ mixBlendMode: 'multiply' }} 
            alt="issue" 
          />
          <div className="genuine">"Raise your genuine concern and get a faster solution 🚀"</div>
          <NavLink to="/Login">
          <button className="login-button">Login Here!</button>
          </NavLink>

         
        
        </section>
        

        <div className="footer-section pt-5 pb-5">
          <div className="footer-container">
            <div className="row">
              <div className="erp-container">
                <div className="remove"></div>
                <div className="xyz-container d-flex flex-row justify-content-center">
                  <div className="d-flex flex-column justify-content-center a-container">
                    <img src="https://cdn3d.iconscout.com/3d/premium/preview/gallery-3d-icon-download-in-png-blend-fbx-gltf-file-formats--picture-photo-image-user-interface-pack-icons-5455458.png?f=webp&h=700" className="image gallery" />
                    <a href="https://www.sviet.ac.in/gallery" className="contact">Photo Gallery</a>
                  </div>
                  <div className="d-flex flex-column justify-content-center a-container">
                    <img src="https://static.vecteezy.com/system/resources/previews/020/273/758/non_2x/student-icon-for-your-website-design-logo-app-ui-free-vector.jpg" className="image" alt="faculty erp" />
                    <a href="https://uj.servergi.com:8079/SIMWEBSVIET/Login" className="contact">Faculty ERP Login</a>
                  </div>
                  <div className="d-flex flex-column justify-content-center a-container">
                    <img src="https://static.vecteezy.com/system/resources/previews/020/273/758/non_2x/student-icon-for-your-website-design-logo-app-ui-free-vector.jpg" className="image" alt="student erp" />
                    <a href="https://uj.servergi.com:8079/ISIMSVIET/login" className="contact">Student ERP Login</a>
                  </div>
                  <div className="d-flex flex-column justify-content-center a-container">
                    <img src="https://www.shutterstock.com/image-vector/phone-handset-speech-bubble-3d-600nw-2101642696.jpg" className="image" alt="contact us" />
                    <a href="https://www.sviet.ac.in/contact-us#" className="contact">Contact Us</a>
                  </div>
                </div>
              </div>

              <div className="contactmaniram">
                <NavLink to="tel:+917827295510"> Warden:- Mr Maniram</NavLink>
              </div>
              <div className="contactpromod">
                <NavLink to="tel:+917973543114"> Chief Warden:- Mr Promod Sharma</NavLink>
              </div>

              <div className="kaushal">
                <a href="https://www.linkedin.com/in/kaushal-kumar-0b9768310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Designed by ThoughtWorks Team</a>
              </div>

              <div className="mail-section">
                <a href="mailto:info@sviet.ac.in" className="footer-section-mail-id">info@sviet.ac.in</a>
                <p className="footer-section-address">
                  near Banur, Rajpura, Punjab 140401
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;