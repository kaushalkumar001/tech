import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const ComplainPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    block: "",
    room: "",
    issue: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error("Not authenticated");

        // Transform data to match backend expectations
        const complaintData = {
            name: formData.name,
            block: formData.block,
            room: formData.room,
            issue: formData.issue,
            phoneNumber: formData.phone // Map 'phone' to 'phoneNumber'
        };

        const response = await axios.post(
            "http://127.0.0.1:4500/api/auth/complaints", 
            complaintData,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        // Handle success
        console.log("Response:", response.data);
        alert("Complaint submitted!");
        setFormData({ name: "", phone: "", block: "", room: "", issue: "" });

    } catch (error) {
        console.error("Error:", error);
        alert(error.response?.data?.message || "Submission failed");
    }
};

console.log(localStorage.getItem('token'))

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
          <form onSubmit={handleSubmit}>
            <input 
              name="name"
              placeholder="Name" 
              type="text" 
              required 
              value={formData.name} 
              onChange={handleChange}
            />
            <input 
              name="phone"
              placeholder="Phone Number" 
              type="tel" 
              required 
              value={formData.phone} 
              onChange={handleChange}
            />
            <br />
            <select 
              name="block"
              required 
              value={formData.block} 
              onChange={handleChange}
            >
              <option value="">Select Block</option>
              <option value="D Block">D Block</option>
              <option value="F Block">F Block</option>
              <option value="I Block">I Block</option>
              <option value="J Block">J Block</option>
            </select>
            <br />
            <br />
            <input 
              name="room"
              placeholder="Room Number" 
              type="tel" 
              required  
              value={formData.room} 
              onChange={handleChange}
            />
            <textarea 
              name="issue"
              placeholder="Issue" 
              required 
              value={formData.issue} 
              onChange={handleChange}
            />
            <button type="submit"name="submit" className="submit">Submit</button>
          </form>
        </div>
      </section>

      <div className="whatsapp">
        <h2 className="stay"> Stay connected with us on 📲✨</h2>
        <h2 className="join"> Join the D Block Students WhatsApp Group! 📲✨ Stay connected, informed, and engaged!</h2> 
        <div className="qr">
          <img src="/images/qr.png" width="490" height="500" style={{ mixBlendMode: 'multiply' }} />
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

export default ComplainPage;