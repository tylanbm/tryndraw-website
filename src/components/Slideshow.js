import React from 'react'

const colors = ["#0088FE", "#00C49F", "#FFBB28"];

const images = ["screen1.png", 'screen2.png', 'screen3.png','screen4.png','screen5.png','screen6.png']

const delay = 4000;

function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    
    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
            resetTimeout();
        };
      }, [index]);

    return (
    <div className="slideshow">
      <div className="slideshow-slider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {/* {colors.map((backgroundColor, index) => (
          <div className="slide" key={index} style={{ backgroundColor }}></div>
        ))} */}

        {images.map((imageName, index) => (
          <div className="slide" key={index} style={{  }}>
            <img className='slideshow-image' src={require(`../${imageName}`)} alt="QR code for Expo GO link" />
          </div>
        ))}

      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`}
          onClick={() => {
            setIndex(idx);
          }}></div>
        ))}
      </div>

    </div>

    
  )
}

export default Slideshow