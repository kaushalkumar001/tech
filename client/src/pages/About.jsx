import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for routing

export const About = () => {
  return (
    <>
      <main>
        <br />
        <br />
        <div className="aboutfirst">
          <p>SVGOI, a beacon of academic distinction, proudly stands tall as it secures the honorable rank of 104 in NIRF 2021,</p>
          <p>a testament to its commitment to excellence.</p>
        </div>
        <section>
          <div className="containerthree">
            <div className="box1">
              <div className="box1in">
                <h2>High-Speed Internet</h2>
                <p>
                  Fast Wi-Fi, reliable connection, unlimited access, secure network, seamless streaming.
                </p>
              </div>
            </div>
            <div className="box2">
              <div className="box2in">
                <h2>Security and Surveillance</h2>
                <p>
                  24/7 monitoring, CCTV cameras, secure access, emergency response, safe hostel environment.
                </p>
              </div>
            </div>
            <div className="box3">
              <div className="box3in">
                <h2>24-Hour Electricity Supply</h2>
                <p>
                  Uninterrupted power, reliable supply, always on, no outages, constant electricity.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="footer-section pt-5 pb-5">
          <div className="footer-container">
            <div className="row">
              <div className="erp-container">
                <div className="remove"></div>
                <div className="xyz-container d-flex flex-row justify-content-center">
                  <div className="d-flex flex-column justify-content-center a-container">
                    <img src="data:image/png;base64,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" className="image" alt="Gallery" />
                    <a href="https://www.sviet.ac.in/gallery" className="contact">Photo Gallery</a>
                  </div>
                  <div className="d-flex flex-column justify-content-center a-container">
                    <img src="https://static.vecteezy.com/system/resources/previews/020/273/758/non_2x/student-icon-for-your-website-design-logo-app-ui-free-vector.jpg" className="image" alt="Faculty ERP" />
                    <a href="https://uj.servergi.com:8079/SIMWEBSVIET/Login" className="contact">Faculty ERP Login</a>
                  </div>
                  <div className="d-flex flex-column justify-content-center a-container">
                    <img src="https://static.vecteezy.com/system/resources/previews/020/273/758/non_2x/student-icon-for-your-website-design-logo-app-ui-free-vector.jpg" className="image" alt="Student ERP" />
                    <a href="https://uj.servergi.com:8079/ISIMSVIET/login" className="contact">Student ERP Login</a>
                  </div>
                  <div className="d-flex flex-column justify-content-center a-container">
                    <img src="data:image/png;base64,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" className="image" alt="Contact Us" />
                    <a href="https://www.sviet.ac.in/contact-us#" className="contact">Contact-Us</a>
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
                <a href="https://www.linkedin.com/in/kaushal-kumar-0b9768310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Designed by ThoughtWorks Innovators</a>
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
      </main>
    </>
  );
};

export default About;