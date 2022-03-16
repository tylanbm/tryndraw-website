import logo from './logo.svg';
import React from 'react';
import YoutubeEmbed from "./components/YoutubeEmbed";
import './App.css';
import './styles.css';
import MainButton from './components/MainButton';
import AuthorCard from './components/AuthorCard';
import Slideshow from './components/Slideshow';

function App() {
  return (
    <div className=''>
      <header className='header-container'>
        <img src={require('../src/logo.png')} alt="TRYNDRAW logo" width={168} />
      </header>
      
      <div className='flow spacing'>
        <body> 
          
          {/* Container for info section */}
          <div className='main-container flow'>
            {/* Slide deck that displays images to showcase app features */}
            <Slideshow />

            <h1 className='heading-container heading'>
              What is TRYNDRAW?
            </h1>

            <p className='text-container text'>
              TRYNDRAW is a lite social media platform, enabling users to draw out hilarious senarios for their friends and the world to see!
            </p>

            <div className='button-width'>
              <MainButton label='View On Github' link="https://github.com/tylanbm/TRYNDRAW" />
            </div>
          </div>
  
          <div className='spacing'></div>

          {/* Container for qr code */}
          <div className='container-bg'>
            <div className='main-container flow'>
              <div>
                <img className='qr-code' src={require('../src/frame.png')} alt="QR code for Expo GO link" />
              </div>
            
              <h1>
              Try Now with Expo GO!

              QR CODE
              </h1>
            </div>
          </div>
          
          {/* Container for video demo */}
    
          <div className='main-container flow'>
            <h1 className='left'>
              See it in action!
            </h1>
            <YoutubeEmbed embedId="rokGy0huYEA" />
          </div>

          {/* Container for creator info */}
          <div className='container-bg spacing'>
          <div className='main-container flow'>
          
          <h1 className='left'>
            Meet the team behind TRYNDRAW
          </h1>
          
          <div className='authors'>
            <AuthorCard source="tylan.jpg" label='View Tylan on Github' link='https://github.com/tylanbm' />
            <AuthorCard source="tyrell.jpg" label='View Tyrell on Github' link='https://github.com/Natty444'  />
          </div>
          </div>
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
