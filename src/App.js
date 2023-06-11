import React, { useRef, useEffect } from 'react';
import './LandingPage.jsx';

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

  useEffect(() => {
    // Use the useRef variables for your logic here
    // For example:
    console.log(emailLabelRef.current, emailRef.current, passwordLabelRef.current, passwordRef.current);
  }, []);

  const handleCloudClick = () => {
    alert('Clicked on the cloud! You are now ready to explore our cloud services.');
  };

  const handleGetStartedClick = () => {
    console.log();
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
          <a href="#" className="button" id="getStartedBtn" onClick={handleGetStartedClick}>
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
