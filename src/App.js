import logo from './logo.svg';
import React from 'react';
import YoutubeEmbed from "./components/YoutubeEmbed";
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        
      </header>
      <body>
        <h1>
          What is TRYNDRAW?
        </h1>
        
        <p>
          TRYNDRAW is a lite social media platform, enabling users to draw out hilarious senarios for their friends and the world to see!
        </p>

        <h1>
          Image slideshow
        </h1>

        <h1>
          View on github button
        </h1>

        <div>
          <img src={require('../src/frame.png')} alt="QR code for Expo GO link" />
        </div>
        <h1>
          Try Now with Expo GO!

          QR CODE
        </h1>

        <h1>
          See it in action!
        </h1>
        <YoutubeEmbed embedId="rokGy0huYEA" />

        <h1>
          Meet the creators!

          Tylan, Tyrell cards(links and photos)
        </h1>




      </body>
    </div>
  );
}

export default App;
