import "./ContactPage.css";
import Footer from "../components/Footer";

function ContactPage() {
  return (
    <>
      <div className="contact-me_container">
        <div className="contact-me_section">
          <h2>Contact Me</h2>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
          <form action="">
            <div className="first-last-name">
              <div className="name-container">
                <label htmlFor="first_name">First name</label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Enter your first name"
                  required
                  className="name-field"
                />
              </div>
              <div className="name-container">
                <label htmlFor="last_name">Last name</label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Enter your last name"
                  required
                  className="name-field"
                />
              </div>
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="yourname@email.com"
                required
                className="email-field"
              />
            </div>
            <div className="message">
              <label htmlFor="message">Message</label>
              <textarea
                name="textarea"
                id="message"
                cols="30"
                rows="10"
                placeholder="Send me a message and I'll reply you as soon as possible..."
                className="message-field"
              ></textarea>
            </div>
            <div className="checkbox-agreement">
              <input type="checkbox" id="agree" name="agree" required />
              <label htmlFor="agree">
                You agree to providing your data to Emmanuel Akpan who may
                contact you.
              </label>
            </div>
            <button type="submit" id="btn__submit">
              Send message
            </button>
          </form>
        </div>
      </div>
      <div className="contact-footer">
        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
