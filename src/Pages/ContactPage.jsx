import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-me_container">
      <div className="contact-me_section">
        <h2>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <form action="">
          <div className="first-last-name">
            <div className="name-container">
              <label htmlFor="firstname">First name</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter your first name"
                required
                className="name-field"
              />
            </div>
            <div className="name-container">
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
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
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
