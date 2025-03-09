import { NavLink } from "react-router-dom";

export const Contact = () => {
    return (
      <>
        <section>
          <main>
            <div className="section-registration">
              <div className="container_contant grid grid-two-cols">
        
              <div className="registration-image">
                <div className="contantus">
                CONTACT <span class="us">US</span>
               </div>
              <div className="img-contact-container">
                <div>
                  <img 
                      src="/images/contact.png" 
                      width="500" 
                      height="500" 
                      style={{ mixBlendMode: 'multiply' }} 
                    />
                </div> 

                <div className="registrationdetails">
                  <div className="contactpage">
                    <p>Get in Touch With Us</p>
                    <br/>
                    <br/>

                    <NavLink to="tel= +917827295510" className="contactus">Warden:- Mr Maniram (Boys)
                      <div className="insidecontact">
                      +917827295510
                      </div> </NavLink>
                    <br/>
                    <br/>
                    <br/>
                    <NavLink to="tel= +917973543114" className="contactus">Chief Warden:- Mr Pramod Sharma (Boys)
                      <div className="insidecontactus">
                        +919341594849
                      </div>
                    </NavLink>
                    <br/>
                    <br/>
                    <br/>
                    <NavLink to="tel= +917347528095" className="contactus">Warden:- Mrs Manvir Kaur (Girls)
                      <div className="insidecontact">
                      +917347528095
                      </div> </NavLink>

                  </div>
                </div>
                </div>
                </div>
              </div>
            </div>
          </main>
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
      
      </>
    );
  };

export default Contact;