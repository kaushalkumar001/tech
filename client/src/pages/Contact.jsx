export const Contact = () => {
    return (
      <>
        <section>
          <main>
            <div className="section-registration">
              <div className="container grid grid-two-cols">
                <div className="registration-image">
                  <img 
                    src="/images/contact.png" 
                    width="500" 
                    height="500" 
                    style={{ mixBlendMode: 'multiply' }} 
                  />
                </div> 
                <div className="registration-details">
                  <div className="contactpage">
                    <p>CONTACT US </p>
                    <br/>
                    <br/>

                    <a href="tel=+917827295510" class="contactus">Warden:- Mr Maniram</a>
                    <br/>
                    <br/>
                    <br/>

                    <a href="tel=+917973543114" class="contactus">Warden:- Mr Promod Sharma</a>

                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>
      </>
    );
  };

export default Contact;