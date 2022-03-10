import logo from './logo.svg';
import React from 'react';
import YoutubeEmbed from "./components/YoutubeEmbed";
import './App.css';
import './styles.css';
import MainButton from './components/MainButton';
import AuthorCard from './components/AuthorCard';

function App() {
  return (
    <div>
      <header className='header-container'>
        <img src={require('../src/logo.png')} alt="TRYNDRAW logo" width={168} />
      </header>
      
      <div className="main-container">
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
          
          <div className='button-width'>
            <MainButton label='View On Github' link="https://github.com/tylanbm/TRYNDRAW" />
          </div>
          

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
          
          <div className='authors'>
            <AuthorCard source="tylan.jpg" />
            <AuthorCard source="tyrell.jpg" />
          </div>
          
        </body>
        
      </div>
      <footer className='footer'>
          <p className='footer-text'>©2022 Tylan Bayley-McPherson</p>
        </footer>
    </div>
  );
}

export default App;
