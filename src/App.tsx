import React, { useState } from "react";
import "./App.scss";
import "react-slideshow-image/dist/styles.css";
import BrandPanel from "./component/BrandPanel";
import i1 from "./logos/1.png";
import i2 from "./logos/2.png";
import i3 from "./logos/3.png";
import i4 from "./logos/4.png";
import i5 from "./logos/5.png";
import i6 from "./logos/6.png";
import i7 from "./logos/7.png";
import i8 from "./logos/8.png";
import i9 from "./logos/9.png";
import i10 from "./logos/10.png";
import i11 from "./logos/11.png";
import i12 from "./logos/12.png";
import i13 from "./logos/13.svg";
import i14 from "./logos/14.svg";
import i15 from "./logos/15.png";
import {
  Button,
  FormGroup,
  InputGroup,
  Label,
  NumericInput,
} from "@blueprintjs/core";

function App() {
  const images = [
    i1,
    i2,
    i3,
    i4,
    i5,
    i6,
    i7,
    i8,
    i9,
    i10,
    i11,
    i12,
    i13,
    i14,
    i15,
  ];

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="app bp3-dark ">
      <div className="controllers">
        <div className="c-card">
          <div
            className="i-group"
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Button
              onClick={() => setIsActive(!isActive)}
              intent={isActive ? "danger" : "primary"}
              rightIcon={isActive ? "stop" : "arrow-right"}
            >
              {isActive ? "Stop" : "Start"}
            </Button>
          </div>
          <div className="i-group">
            <Label>Visible Count:</Label>
            <NumericInput
              id="text-input"
              min={1}
              placeholder="Placeholder text"
            />
          </div>
          <div className="i-group">
            <Label>Visible Count:</Label>
            <NumericInput
              id="text-input"
              min={1}
              placeholder="Placeholder text"
            />
          </div>
          <div className="i-group">
            <Label>Visible Count:</Label>
            <NumericInput
              id="text-input"
              min={1}
              placeholder="Placeholder text"
            />
          </div>
          <div className="i-group">
            <Label>Visible Count:</Label>
            <NumericInput
              id="text-input"
              min={1}
              placeholder="Placeholder text"
            />
          </div>
          <div className="i-group">
            <Label>Visible Count:</Label>
            <NumericInput
              id="text-input"
              min={1}
              placeholder="Placeholder text"
            />
          </div>
        </div>
      </div>

      <div className="main-container">
        <div className="image-container">
          <BrandPanel
            images={images}
            visibleCount={10}
            interval={1000}
            animationItemcount={2}
            transitionDuration={200}
            randomized={true}
            isActive={isActive}
          />
        </div>
        <div className="image-container">
          <BrandPanel
            images={images}
            visibleCount={10}
            interval={1000}
            animationItemcount={2}
            transitionDuration={200}
            randomized={true}
            isActive={isActive}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
