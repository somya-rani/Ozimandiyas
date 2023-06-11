import React, { useRef, useEffect, useState } from 'react';
import './styles.scss';

const App = () => {
  const emailLabelRef = useRef(null);
  const emailRef = useRef(null);
  const passwordLabelRef = useRef(null);
  const passwordRef = useRef(null);
  const showPasswordCheckRef = useRef(null);
  const showPasswordToggleRef = useRef(null);
  const mySVGRef = useRef(null);
  const twoFingersRef = useRef(null);
  const armLRef = useRef(null);
  const armRRef = useRef(null);
  const eyeLRef = useRef(null);
  const eyeRRef = useRef(null);
  const noseRef = useRef(null);
  const mouthRef = useRef(null);
  const mouthBGRef = useRef(null);
  const mouthSmallBGRef = useRef(null);
  const mouthMediumBGRef = useRef(null);
  const mouthLargeBGRef = useRef(null);
  const mouthMaskPathRef = useRef(null);
  const mouthOutlineRef = useRef(null);
  const toothRef = useRef(null);
  const tongueRef = useRef(null);
  const chinRef = useRef(null);
  const faceRef = useRef(null);
  const eyebrowRef = useRef(null);
  const outerEarLRef = useRef(null);
  const outerEarRRef = useRef(null);
  const earHairLRef = useRef(null);
  const earHairRRef = useRef(null);
  const hairRef = useRef(null);
  const bodyBGRef = useRef(null);
  const bodyBGChangedRef = useRef(null);

  const [url, setUrl] = useState('');

  useEffect(() => {
    const email = 'suvamkumar4248@gmail.com'; // Email address to redirect to
  
    // Create a beautiful box element
    const boxElement = document.createElement('div');
    boxElement.style.width = '300px';
    boxElement.style.height = '200px';
    boxElement.style.backgroundColor = '#f0f0f0';
    boxElement.style.border = '2px solid #ccc';
    boxElement.style.borderRadius = '10px';
    boxElement.style.margin = '20px auto';
    boxElement.style.padding = '20px';
    boxElement.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
  
    // Create content for the box
    const titleElement = document.createElement('h2');
    titleElement.textContent = 'Newsletter';
    titleElement.style.color = '#333';
  
    const contentElement = document.createElement('p');
    contentElement.textContent = 'Stay up to date with the latest news and updates.';
    contentElement.style.color = '#666';
  
    const emailElement = document.createElement('p');
    emailElement.textContent = 'Email: ';
    /* eslint-disable-next-line no-undef */
    const hashedEmail = sha256(email); // Hash the email address using SHA-256
  
    const encryptedEmailElement = document.createElement('a');
    encryptedEmailElement.href = `mailto:${hashedEmail}`;
    encryptedEmailElement.textContent = 'Click to email';
    encryptedEmailElement.style.color = '#007bff';
  
    // Append the content to the box
    boxElement.appendChild(titleElement);
    boxElement.appendChild(contentElement);
    emailElement.appendChild(encryptedEmailElement);
    boxElement.appendChild(emailElement);
  
    // Add the box to the document body
    document.body.appendChild(boxElement);
  
    // Cleanup function to remove the box when component unmounts
    return () => {
      document.body.removeChild(boxElement);
    };
  }, []);
  

  const handleCloudClick = () => {
    alert('Clicked on the cloud! You are now ready to explore our cloud services.');
  };

  const handleGetStartedClick = () => {
    window.location.href = 'styles.scss'; // Redirect to styles.scss
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div id="container">
      <div id="cloud-container" onClick={handleCloudClick}>
        <div id="cloud"></div>
      </div>
      <div id="text">
        <h1>Welcome to our Cloud Service</h1>
        <p>Experience reliable and scalable cloud solutions.</p>
        <div className="get-started">
          <input type="text" placeholder="Enter URL" value={url} onChange={handleUrlChange} />
          <button className="button" id="getStartedBtn" onClick={handleGetStartedClick}>
            Start your Adventure
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
