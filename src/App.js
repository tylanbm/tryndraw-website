import React from "react";
import YoutubeEmbed from "./components/YoutubeEmbed";
import "./App.css";
import "./styles.css";
import MainButton from "./components/MainButton";
import AuthorCard from "./components/AuthorCard";
import Slideshow from "./components/Slideshow";
import Version from "./components/Version";

function App() {
  return (
    <div className="">
      <header className="header-container">
        <img src={require("../src/logo.png")} alt="TRYNDRAW logo" width={168} />
      </header>

      <div className="flow spacing">
        <body>
          {/* Container for info section */}
          <div className="main-container flow">
            {/* Slide deck that displays images to showcase app features */}
            <Slideshow />

            <h1 className="heading-container heading">What is TRYNDRAW?</h1>

            <p className="text-container text">
              TRYNDRAW is a lite social media platform, enabling users to draw
              out hilarious scenarios for their friends and the world to see!
            </p>

            <div className="spacing16"></div>

            <div className="button-width center">
              <div className="half-width">
                <MainButton
                  label="View On Github"
                  link="https://github.com/tylanbm/TRYNDRAW"
                />
              </div>
            </div>
          </div>

          <div className="spacing"></div>

          {/* Container for qr code */}
          <div className="container-bg">
            <div className="main-container flow">
              <h1 className="heading">Try now on Android with Expo GO!</h1>
              <div className="text-container">
                <p className="text">
                  If you have an android device you can scan the QR code below
                  to get started. Not currently available on IOS devices.
                </p>
              </div>

              <div className="center">
                <div className="half-width">
                  <img
                    className="qr-code"
                    src={require("../src/qrcode.png")}
                    alt="QR code for Expo GO link"
                  />
                  <Version
                    label={"Scan with Expo Go on Android"}
                    icon="android"
                  />
                  <Version label={"Coming soon to IOS"} icon="apple" />
                </div>
              </div>
            </div>
          </div>

          <div className="spacing"></div>

          {/* Container for video demo */}
          <div className="main-container flow">
            <h1 className="heading">See it in action!</h1>
            <YoutubeEmbed embedId="iKMtFTNSjQQ" />
          </div>

          {/* Container for creator info */}
          <div className="spacing"></div>
          <div className="main-container flow">
            <h1 className="heading">Meet the team behind TRYNDRAW</h1>

            <div className="authors">
              <AuthorCard
                source="tylan.jpg"
                label="View Tylan on Github"
                link="https://github.com/tylanbm"
              />
              <AuthorCard
                source="tyrell.jpg"
                label="View Tyrell on Github"
                link="https://github.com/tyrellbain4"
              />
            </div>
          </div>

          <script
            type="module"
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          ></script>
          <script
            nomodule
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          ></script>
        </body>
      </div>
      <footer className="footer">
        <p className="footer-text">©2022 Tylan Bayley-McPherson</p>
      </footer>
    </div>
  );
}

export default App;
