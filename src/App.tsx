import React, { useState } from "react";
import "./App.scss";
import "react-slideshow-image/dist/styles.css";
// import BrandPanel from "./component/BrandPanel";
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
import { Button, Checkbox, Label, NumericInput } from "@blueprintjs/core";
import { CopyBlock, dracula } from "react-code-blocks";
import { Col, Container, Row } from "react-bootstrap";

import ImageGrid from "react-image-grid-animator";

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
  const [state, setState] = useState({
    visibleCount: 10,
    interval: 1000,
    animationItemcount: 2,
    transitionDuration: 200,
    randomized: true,
  });

  return (
    <Container fluid className="app bp3-dark ">
      <Row className="mt-3">
        <Col xs={12} className="text-center">
          <h2>React Image Grid Animator</h2>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={6} className="px-0">
          <Label>How to install</Label>
          <CopyBlock
            text={`npm install react-image-grid-animator`}
            language="javascript"
            showLineNumbers={false}
            theme={dracula}
            codeBlock={true}
          />
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={6} className="px-0">
          <Label>Usage</Label>
          <CopyBlock
            text={`import ImageGrid from "react-image-grid-animator";`}
            language="javascript"
            showLineNumbers={false}
            theme={dracula}
            codeBlock={true}
          />
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={6}>
          <Label>Play ground</Label>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12} md={6} className="d-flex justify-content-end">
          <div className="c-card">
            <div className="i-group">
              <Label>Visible Count:</Label>
              <NumericInput
                id="text-input"
                value={state.visibleCount}
                min={1}
                placeholder="Placeholder text"
                onValueChange={(e) => {
                  console.log(e);
                  if (e < images.length && e > 0) {
                    setState({ ...state, visibleCount: e });
                  }
                }}
              />
            </div>
            <div className="i-group">
              <Label>interval:</Label>
              <NumericInput
                id="text-input"
                value={state.interval}
                min={100}
                placeholder="Placeholder text"
                onValueChange={(e) => {
                  setState({ ...state, interval: e });
                }}
              />
            </div>
            <div className="i-group">
              <Label>Animation Item count:</Label>
              <NumericInput
                id="text-input"
                value={state.animationItemcount}
                min={1}
                placeholder="Placeholder text"
                disabled={state.randomized}
                onValueChange={(e) => {
                  setState({ ...state, animationItemcount: e });
                }}
              />
            </div>
            <div className="i-group">
              <Label>Transition Duration:</Label>
              <NumericInput
                id="text-input"
                min={1}
                value={state.transitionDuration}
                placeholder="Placeholder text"
                onValueChange={(e) => {
                  setState({ ...state, transitionDuration: e });
                }}
              />
            </div>
            <div className="i-group">
              <Checkbox
                checked={state.randomized}
                label="Randomized"
                onChange={(e: any) => {
                  setState({ ...state, randomized: e.target.checked });
                }}
              />
            </div>
            <div
              className="i-group"
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Button
                onClick={() => setIsActive(!isActive)}
                intent={isActive ? "danger" : "primary"}
                rightIcon={isActive ? "stop" : "play"}
              >
                {isActive ? "Stop" : "Start"}
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-start">
          <div className="c-card">
            <CopyBlock
              text={`<ImageGrid 
    images = {images}
    visibleCount = {${state.visibleCount}}
    interval = {${state.interval}}
    animationItemcount = {${state.animationItemcount}}
    transitionDuration = {${state.transitionDuration}}
    randomized = {${state.randomized}}
    isActive = {${isActive}} 
/>`}
              language="javascript"
              showLineNumbers={true}
              theme={dracula}
              codeBlock={true}
            />
          </div>
        </Col>
      </Row>

      <div className="main-container">
        <div className="image-container">
          <ImageGrid
            images={images}
            visibleCount={state.visibleCount}
            interval={state.interval}
            animationItemcount={state.animationItemcount}
            transitionDuration={state.transitionDuration}
            randomized={state.randomized}
            isActive={isActive}
          />
        </div>
        <div className="image-container">
          <ImageGrid
            images={images}
            visibleCount={state.visibleCount}
            interval={state.interval}
            animationItemcount={state.animationItemcount}
            transitionDuration={state.transitionDuration}
            randomized={state.randomized}
            isActive={isActive}
          />
        </div>
      </div>
    </Container>
  );
}

export default App;
