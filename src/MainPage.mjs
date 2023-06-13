import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import { useHistory } from "preact-router";
import { sha256 } from "crypto-js";
import cloudImage1 from "./src/Imagres/WhatsApp Image 2023-06-12 at 12.17.10 PM_waifu2x_noise1_scale4x.png";
import cloudImage2 from "./src/Imagres/WhatsApp Image 2023-06-12 at 12.20.12 PM_waifu2x_noise1_scale4x.png";
import cloudImage3 from "./src/Imagres/WhatsApp Image 2023-06-12 at 12.20.19 PM_waifu2x_noise1_scale4x.png";
import "./Landing_Page/dist/Newsletter.css"; // Import the CSS file
import "./Login/dist/index.jsx"; // Import the JSX file for login

function MainPage() {
  const history = useHistory();
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email) {
      const hashedEmail = sha256(email).toString();

      window.location.href = `mailto:suvamkumar4248@gmail.com?subject=Newsletter Subscription&body=Hashed Email: ${hashedEmail}`;

      setSuccessMsg("Successfully subscribed to the newsletter!");
      setErrorMsg("");
      setEmail("");
    } else {
      setErrorMsg("Please enter a valid email address.");
      setSuccessMsg("");
    }
  };

  const openNewsletterPopup = () => {
    setShowPopup(true);
  };

  const closeNewsletterPopup = () => {
    setShowPopup(false);
    setEmail("");
    setSuccessMsg("");
    setErrorMsg("");
  };

  const handleAdventureButtonClick = () => {
    history.push("/login");
  };

  return (
    <div>
      <div className="sidebar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div className="content">
        <div className="parallax">
          <div className="parallax-group">
            <div className="parallax-layer parallax-layer__background">
              {/* Background layer */}
            </div>
            <div className="parallax-layer parallax-layer__foreground">
              {/* Foreground layer */}
              <div className="parallax-content">
                <h1>Hello World!</h1>
                <p>Start your Adventure Now!</p>
                <button className="start-adventure-button" onClick={handleAdventureButtonClick}>
                  Start your Adventure
                </button>
              </div>
            </div>
          </div>
        </div>

        {showPopup && (
          <div className="newsletter-popup">
            <div className="newsletter-content">
              <h2>Newsletter Subscription</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email Address:</label>
                  <input type="email" value={email} onInput={handleEmailChange} required />
                </div>
                <button type="submit" className="submit-btn">
                  Subscribe
                </button>
                {successMsg && <p className="success-msg">{successMsg}</p>}
                {errorMsg && <p className="error-msg">{errorMsg}</p>}
              </form>
              <button onClick={closeNewsletterPopup}>Close</button>
            </div>
          </div>
        )}

        <div className="cloud-innovations">
          <img src={cloudImage1} alt="Cloud Innovation 1" />
          <img src={cloudImage2} alt="Cloud Innovation 2" />
          <img src={cloudImage3} alt="Cloud Innovation 3" />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
