import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
        <form ref={form} onSubmit={sendEmail} className="admission-form">
          <label>Name</label>
          <input type="text" name="user_name" required />

          <label>Phone Number</label>
          <input type="tel" name="phone_number" required />

          <label>Block</label>
          <select name="user_block" required>
            <option value="">Select Block</option>
            <option value="D Block">D Block</option>
            <option value="F Block">F Block</option>
            <option value="I Block">I Block</option>
            <option value="J Block">J Block</option>
          </select>

          <label>Room Number</label>
          <input type="text" name="Room_Number" required />

          <label>Issue</label>
          <textarea name="message" required></textarea>

          <input type="submit" value="Send" />
        </form>
      </section>
    </>
  );
};

export default Admission;
