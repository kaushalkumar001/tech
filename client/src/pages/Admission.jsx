import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { NavLink } from "react-router-dom"; // Import NavLink for routing

export const Admission = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_euk1hfr", "template_70gf6rc", form.current, {
        publicKey: "xcHzgoyej1rZa-iBq",
      })
      .then(
        () => {
          alert("Email sent successfully!");
        },
        (error) => {
          alert("Email sending failed. Try again.");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <section>
        <div className="rule">
          <div className="rulehostel">
            <h2>RULES & REGULATIONS FOR </h2>
            <div className="ruleshostel">
              <h2>HOSTEL</h2>
            </div>
          </div>

          <p className="rules">
            - Students must ensure all hostel furniture, walls, and equipment are in good condition and report any damage to the Warden in writing
            <br />
            - Students must obtain the Principal's permission first, then the Warden's, to leave the hostel for any reason.
            <br />
            - Day scholars are not allowed in the hostel; residents must uphold the institution's interests, foster friendship, and avoid keeping unauthorized property or guests.
            <br />
            - Dispose of the waste and napkins properly in the respective dustbins.
            <br />
            - Any illness must be reported to the Hostel Warden
            <br />
            - Birthday celebrations, bursting crackers (during Diwali, Pongal, etc.), throwing colors are not allowed inside the rooms
            <br />
            - The resident of a room is responsible for any damage to the property in the room during his/her occupancy of that room
            <br />
            - Ragging of students admitted to the Institute is totally banned. Any violation of this by the students will be dealt with very severely
            <br />
            - Smoking, alcohol consumption, and use of narcotic drugs in the hostel are strictly prohibited
            <br />
          </p>
        </div>
      
        <div className="service-image">
          <form ref={form} onSubmit={sendEmail}>
            <input placeholder="Name" type="text" name="user_name" required />
            <input placeholder="Phone Number" type="tel" name="phone_number" required />
            <br />
            <select name="user_block" required>
              <option value="">Select Block</option>
              <option value="D Block">D Block</option>
              <option value="F Block">F Block</option>
              <option value="I Block">I Block</option>
              <option value="J Block">J Block</option>
            </select>
            <br />
            <br />
            <input placeholder="Room Number" type="tel" name="Room_Number" required />
            <textarea placeholder="Issue" name="message" required></textarea>
            <input className="submit" type="submit" value="Submit" />
          </form>
        </div>
      </section>
      <div className="whatsapp">
        <h2 className="stay"> Stay connected with us on 📲✨</h2>
        
        <br />
        <h2 className="join"> Join the D Block Students WhatsApp Group! 📲✨ Stay connected, informed, and engaged!</h2>
        <div className="qr">
          <img src="/images/qr.png" width="490" height="500" style={{ mixBlendMode: 'multiply' }} alt="QR Code" />
        </div>
      </div>
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

export default Admission;