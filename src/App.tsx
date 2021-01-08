import React from "react";
import "./App.css";
import "react-slideshow-image/dist/styles.css";
import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";
import { Fade } from "react-slideshow-image";

function App() {
  const fadeImages = [image1, image2, image3];
  return (
    <div className="App">
      <div className="brand-slider">
        <div style={{ width: "700px", height: "600px" }}>
          <h2>Fade Effect</h2>
          <div className="slide-container">
            <Fade duration={1000} infinite indicators={false} arrows={false}>
              <div className="each-fade">
                <div>
                  <img alt="" src={fadeImages[0]} />
                </div>
              </div>
              <div className="each-fade">
                <div>
                  <img alt="" src={fadeImages[1]} />
                </div>
              </div>
              <div className="each-fade">
                <div>
                  <img alt="" src={fadeImages[2]} />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
